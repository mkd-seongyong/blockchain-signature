// 문서를 등록하고 docHash 반환
export async function registerDocument(data: string): Promise<string> {
  const res = await fetch("http://localhost:4000/api/v1/documents", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data })
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Document registration failed: ${errorText}`);
  }

  const result = await res.json();
  return result.docHash; // 서버에서 반환한 해시
}
