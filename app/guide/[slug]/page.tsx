import { redirect } from 'next/navigation';

export default function GuideSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  redirect(`/${params.slug}`);
}
