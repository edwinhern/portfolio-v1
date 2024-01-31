export function resolveHref(documentType?: string, slug?: string): string | undefined {
  switch (documentType) {
    case 'home':
      return '/';
    case 'project':
      return slug ? `/project/${slug}` : undefined;
    case 'post':
      return slug ? `/blog/${slug}` : undefined;
    default:
      console.warn('Invalid document type:', documentType);
      return undefined;
  }
}
