import { Badge, Box, Heading } from "@radix-ui/themes";
import { PostList } from "@/components";
import { Metadata } from "next";
import { CommontLayout } from "@/components/CommonLayout";
export const metadata: Metadata = {
  title: "Tại sao vậy em?",
  description: "Cuộc sống em khó khăn lắm hả?",
};

export default async function Page() {
  return (
    <CommontLayout>
      <Box
        className=" rounded-xl mb-2 p-4 md:p-9"
        style={{ background: "var(--gray-a3)" }}
      >
        <Heading className="mb-4">Tại sao vậy em?</Heading>
        <Badge className="mb-4" color="pink">
          Cuộc sống của em khó khăn lắm hả?
        </Badge>
      </Box>
      <article className="mb-8 -mx-2">
        <PostList filter={{}} />
      </article>
    </CommontLayout>
  );
}
