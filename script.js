document.getElementById("recommendation-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const usage = document.getElementById("usage").value;
  const product = document.getElementById("product").value;
  const price = document.getElementById("price").value;
  const eco = document.getElementById("eco").value;

  const prompt = `Kullanım amacı: ${usage}, Ürün tipi: ${product}, Fiyat: ${price}, Sürdürülebilirlik: ${eco}. Bu bilgilerle kullanıcıya uygun Packmore ürününü öner.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_OPENAI_API_KEY"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7
    })
  });

  const data = await response.json();
  const result = data.choices[0].message.content;
  document.getElementById("result").innerText = result;
});