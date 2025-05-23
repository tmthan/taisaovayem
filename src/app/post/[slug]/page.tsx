import { getThumbnail } from "@/helpers";
import Link from "next/link";
import { Heading, Flex, Badge, Text } from "@radix-ui/themes";
import { Metadata } from "next";
import { PostContent } from "@/components";
import set from "lodash/set";
import { getPostBySlug, getCategoryList, getTagList } from "@/api"; // cập nhật lại đường dẫn nếu cần
import { decode } from "he";

type PostProps = {
  slug: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<PostProps>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      title: "Oh oh! Trang bạn truy cập không tồn tại rồi",
      description: "Trang bạn yêu cầu hiện không có rùi!",
      openGraph: {
        title: "Oh oh! Trang bạn truy cập không tồn tại rồi",
        description: "Trang bạn yêu cầu hiện không có rùi!",
        images: "/404.jpg",
      },
    };
  }
  const thumbnail = getThumbnail(post);

  const metaData: Metadata = {
    title: decode(post.title.rendered),
    description:
      post.content.rendered?.replace(/<[^>]+>/g, "") || post.title.rendered,
    openGraph: {
      title: decode(post.title.rendered),
      description:
        post.content.rendered?.replace(/<[^>]+>/g, "") || post.title.rendered,
    },
  };

  if (thumbnail && thumbnail?.length) {
    set(metaData, ["openGraph", "images"], thumbnail[0]);
  }

  return metaData;
}

export default async function PostPage({
  params,
}: {
  params: Promise<PostProps>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return (
      <article className="text-center">
        <Flex justify="center">
          <img src="/404.jpg" className="max-w-80" />
        </Flex>
        <Heading mb="2" size="4">
          Oh oh! Trang không tồn tại rùi!
        </Heading>
        <Text>
          Trang bạn truy cập đang không tồn tại rùi. Có thể ai đó gửi nhầm đường
          link rồi. Hãy thử quay lại trang chủ nhé.
        </Text>
      </article>
    );
  }
  const categories = post.categories.length
    ? await getCategoryList({
        include: post.categories.join(","),
      })
    : [];
  const tags = post.tags.length
    ? await getTagList({ include: post.tags.join(",") })
    : [];

  return (
    <>
      <article className="w-full">
        <PostContent post={post} />
      </article>
      <article className="py-4">
        <Heading className="mb-4" as="h2" size="2">
          Chuyên mục
        </Heading>
        <Flex gap="2" wrap="wrap">
          {categories.map((category) => (
            <Badge key={category.id} color="green">
              <Link href={`/category/${category.slug}`}>{category.name}</Link>
            </Badge>
          ))}
        </Flex>
      </article>
      <article className="py-4">
        <Heading className="mb-4" as="h2" size="2">
          Tag
        </Heading>
        <Flex gap="2" wrap="wrap">
          {tags.map((tag) => (
            <Badge key={tag.id} color="pink">
              <Link href={`/tag/${tag.slug}`}>{tag.name}</Link>
            </Badge>
          ))}
        </Flex>
      </article>
    </>
  );
}
