import { BlogButton } from "@/components/blogButton";
import Layout from "@/components/layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

type ZennItem = {
  id: string;
  title: string;
  slug: string;
  emoji: string;
  published_at: string;
  path: string;
};

type BlogZennProps = {
  articles?: ZennItem[];
};

const ZENN_API = "https://zenn.dev/";

async function getZennArticles() {
  const res = await fetch(
    `${ZENN_API}api/articles?username=ukir&order=latest&count=10`,
    {
      next: { revalidate: 3600 },
    }
  );
  const data: BlogZennProps = await res.json();
  return data;
}

function formatDate(apiDateString: string) {
  const date = new Date(apiDateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth()は0から始まるため、1を足す
  const day = date.getDate();

  return `${year}/${month}/${day}`;
}

export default async function Blog() {
  const data = await getZennArticles();
  const articles = data.articles || [];
  return (
    <Layout>
      <div className="lg:mx-40">
        <h1 className="text-4xl" style={{ fontWeight: "800" }}>
          Tech Blog
        </h1>
        <div className="mb-7 pt-2">{/* koments */}</div>
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-10 md:gap-y-1 lg:gap-x-10">
          {articles.map((article: ZennItem) => (
            <div className="mb-10" key={article.slug}>
              <Link href={`${ZENN_API}/${article.path}`}>
                <Card className="overflow-hidden duration-150 hover:scale-[1.02]">
                  <CardHeader className="border-b border-b-muted py-10 text-center text-7xl">
                    {article.emoji}
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="font-bold text-center">{article.title}</div>
                    <div className="mt-2 text-center text-sm text-muted-foreground">
                      {formatDate(article.published_at)}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="https://zenn.dev/ukir" className="inline-flex">
            <BlogButton />
          </Link>
        </div>
      </div>
    </Layout>
  );
}