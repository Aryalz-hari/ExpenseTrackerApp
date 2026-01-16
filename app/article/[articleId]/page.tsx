
export default async function ArticlePage({
  params,
  searchParams,
}: {
  params:Promise< { articleId: string }>;
  searchParams: Promise <{ lang?: "en" | "fr" }>;
}) {
  const { articleId } = await  params;
  const { lang } = await  searchParams;
  return (
    <div>
      <h1>News Article {articleId ?? "not found"}</h1>
      <p>Reading In Language {lang ?? "not found"}</p>
    </div>
  );
}
