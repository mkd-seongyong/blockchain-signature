export async function sendTransaction(
  data: string,
  signature: string,
  signerAddress: string
) {
  const res = await fetch("http://localhost:4000/api/v1/signatures", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data, signature, signerAddress })
  });

  if (!res.ok) throw new Error("Transaction failed");
  return res.json();
}


