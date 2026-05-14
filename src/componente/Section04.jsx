const products = [
  {
    id: 1,
    name: "Nike Pegasus 41",
    price: "$20",
    period: "/วัน",
    rating: "4.9",
    reviews: "128",
    image: "👟",
  },
  {
    id: 2,
    name: "Adidas Adios Pro",
    price: "$25",
    period: "/วัน",
    rating: "4.8",
    reviews: "95",
    image: "👟",
  },
  {
    id: 3,
    name: "ASICS Superblast",
    price: "$22",
    period: "/วัน",
    rating: "4.7",
    reviews: "76",
    image: "👟",
  },
];

export default function Section04() {
  return (
    <section className="bg-black text-white py-20 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-[1560px]">
        <div className="mb-16">
          <p className="text-[13px] font-semibold text-[#C3FF51] uppercase tracking-[0.35em] mb-4">
            -------- รองเท้าแนะนำ
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            รองเท้ายอดนิยม
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-[28px] border border-[#1f2937] bg-[#0b0c10] overflow-hidden hover:border-[#C3FF51] transition group"
            >
              {/* Image */}
              <div className="h-64 bg-gradient-to-br from-[#1f2937] to-[#090a0d] flex items-center justify-center text-7xl group-hover:scale-105 transition">
                {product.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#C3FF51]">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-[13px] text-[#8f94a5]">
                    ({product.reviews} รีวิว)
                  </span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-extrabold text-[#C3FF51]">
                      {product.price}
                    </p>
                    <p className="text-[12px] text-[#8f94a5]">{product.period}</p>
                  </div>
                  <button className="rounded-3xl bg-[#C3FF51] text-black px-6 py-3 font-semibold hover:bg-[#D3FE51] transition text-[13px]">
                    เช่า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
