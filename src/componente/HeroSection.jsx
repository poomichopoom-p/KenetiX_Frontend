export default function HeroSection() {
  return (
    <section className="bg-black text-white py-20 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-[1560px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-6 rounded-full border border-[#C3FF51] bg-[#C3FF51]/10 px-4 py-2">
              <p className="text-[12px] font-semibold text-[#C3FF51] uppercase tracking-[0.22em]">
                ยินดีต้อนรับ
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Rental Glass
              <br />
              of <span className="text-[#C3FF51]">KinetIX</span>
            </h1>

            <p className="text-lg md:text-xl text-[#b8bdce] mb-8 max-w-xl">
              เช่ารองเท้าวิ่งคุณภาพดี แบรนด์ชั้นนำ ด้วยราคาที่ถูกและสะดวก ปลอดภัย 100%
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center rounded-3xl bg-[#C3FF51] px-8 py-4 text-base font-semibold text-black hover:bg-[#D3FE51] transition">
                เริ่มเช่าเลย
              </button>
              <button className="inline-flex items-center justify-center rounded-3xl border-2 border-[#C3FF51] px-8 py-4 text-base font-semibold text-[#C3FF51] hover:bg-[#C3FF51]/10 transition">
                เรียนรู้เพิ่มเติม
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-3xl border border-[#1f2937] bg-[#0b0c10] p-6">
              <p className="text-[14px] text-[#8f94a5] mb-3">รองเท้าทั้งหมด</p>
              <p className="text-4xl font-extrabold text-[#C3FF51]">56</p>
            </div>
            <div className="rounded-3xl border border-[#1f2937] bg-[#0b0c10] p-6">
              <p className="text-[14px] text-[#8f94a5] mb-3">สมาชิก</p>
              <p className="text-4xl font-extrabold text-white">12K+</p>
            </div>
            <div className="rounded-3xl border border-[#1f2937] bg-[#0b0c10] p-6">
              <p className="text-[14px] text-[#8f94a5] mb-3">ความพึงพอใจ</p>
              <p className="text-4xl font-extrabold text-[#C3FF51]">4.9★</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
