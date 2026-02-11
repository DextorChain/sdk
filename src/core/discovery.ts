export async function discover(name: string) {
  return { name, endpoint: "https://service.mock/" + name };
}
