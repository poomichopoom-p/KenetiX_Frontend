import { useLoaderData } from "react-router-dom";
import { Search, ArrowRight, ChevronRight } from "lucide-react";

export default function User_interFace() {
  const { user, cardStats, rentItems, historyItems, quickFilters, menuItems } =
    useLoaderData();

  return (
    <>
      <div className="min-h-screen bg-[#080809] text-white font-sora">
        <div className="mx-auto max-w-[1560px] px-6 py-6">
          <header className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between"></header>

          <div className="mt-8 grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="rounded-[32px] border border-[#1f2937] bg-[#0b0c10] p-6 text-[#c1c5d0] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
              <div className="flex flex-col items-center gap-4 rounded-3xl border border-[#1f2937] bg-[#090a0d] p-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#00FF41] to-[#00E5FF] text-2xl font-black text-black">
                  {user.initials}
                </div>
                <div>
                  <p className="text-[22px] font-bold text-white">
                    {user.name}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-[#8f94a5]">
                    {user.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 rounded-3xl border border-[#1f2937] bg-[#080809] p-5">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-3xl border border-[#1f2937] bg-[#090a0d] p-4">
                    <p className="text-[14px] text-[#8f94a5]">คะแนน</p>
                    <p className="mt-2 text-2xl font-bold text-[#C3FF51]">
                      {user.score}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-[#1f2937] bg-[#090a0d] p-4">
                    <p className="text-[14px] text-[#8f94a5]">เช่าแล้ว</p>
                    <p className="mt-2 text-2xl font-bold text-white">
                      {user.rented}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-[#1f2937] bg-[#090a0d] p-4">
                    <p className="text-[14px] text-[#8f94a5]">ระดับ</p>
                    <p className="mt-2 text-2xl font-bold text-[#C3FF51]">
                      {user.level}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    className="w-full rounded-3xl border border-[#1f2937] bg-[#090a0d] px-5 py-4 text-left text-[14px] font-medium text-[#c1c5d0] transition hover:border-[#C3FF51] hover:text-[#C3FF51]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </aside>

            <main className="space-y-6">
              <section className="rounded-[32px] border border-[#1f2937] bg-[#0b0c10] p-6 lg:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-[13px] uppercase tracking-[0.35em] text-[#8f94a5]">
                      ยินดีต้อนรับกลับมา
                    </p>
                    <h1 className="mt-4 text-[32px] font-extrabold text-white sm:text-[42px]">
                      {user.name}
                    </h1>
                    <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#b8bdce]">
                      ยินดีคืนสู่ KINETI X! ดูรายการเช่า รายได้
                      และสถิติของคุณทั้งหมดได้ในที่เดียว.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-3 rounded-3xl border border-[#1f2937] bg-[#080809] px-5 py-4 text-sm text-[#c1c5d0]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00FF41] to-[#00E5FF] text-black">
                      !
                    </span>
                    <div>
                      <p className="text-[13px] text-[#8f94a5]">สถานะสมาชิก</p>
                      <p className="font-semibold text-white">{user.role}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {cardStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-[#1f2937] bg-[#090a0d] p-5"
                    >
                      <p className="text-[12px] uppercase tracking-[0.35em] text-[#8f94a5]">
                        {stat.label}
                      </p>
                      <p
                        className={`mt-4 text-[22px] font-extrabold ${stat.accent ? "text-[#C3FF51]" : "text-white"}`}
                      >
                        {stat.value}
                      </p>
                      <p className="mt-2 text-[12px] text-[#7d82a1]">
                        {stat.note}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[32px] border border-[#1f2937] bg-[#0b0c10] p-6 lg:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8f94a5]">
                      กำลังเช่าอยู่
                    </p>
                    <h2 className="mt-3 text-[22px] font-bold text-white">
                      รองเท้าที่เปิดให้เช่า
                    </h2>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-3xl bg-[#C3FF51] px-5 py-3 text-[13px] font-semibold text-black hover:bg-[#D3FE51]">
                    ดูทั้งหมด
                    <ChevronRight size={16} />
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  {rentItems.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col gap-3 rounded-[28px] border border-[#1f2937] bg-[#080809] p-5 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#0c0d12] text-[13px] font-bold text-[#C3FF51]">
                          {item.name.split(" ")[0][0]}
                        </div>
                        <div>
                          <p className="text-[16px] font-semibold text-white">
                            {item.name}
                          </p>
                          <p className="text-[13px] text-[#8f94a5]">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-3 rounded-3xl border border-[#1f2937] bg-[#090a0d] px-4 py-3 text-[13px] font-semibold text-[#C3FF51]">
                        <span>{item.price}</span>
                        <span className="rounded-full bg-[#0b0c10] px-3 py-1 text-[11px] text-[#8f94a5]">
                          เช่า
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[32px] border border-[#1f2937] bg-[#0b0c10] p-6 lg:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8f94a5]">
                      History
                    </p>
                    <h2 className="mt-3 text-[22px] font-bold text-white">
                      ประวัติรายการ
                    </h2>
                  </div>
                  <button className="rounded-3xl border border-[#1f2937] bg-[#080809] px-5 py-3 text-[13px] font-semibold text-[#C3FF51] hover:border-[#C3FF51]">
                    ดูทั้งหมด
                  </button>
                </div>

                <div className="mt-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                  <label className="relative block w-full xl:max-w-[420px]">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8f94a5]" />
                    <input
                      type="search"
                      placeholder="ค้นหา"
                      className="w-full rounded-3xl border border-[#1f2937] bg-[#080809] py-4 pl-12 pr-4 text-[13px] text-white outline-none placeholder:text-[#63676f]"
                    />
                  </label>

                  <div className="flex flex-wrap gap-3">
                    {quickFilters.map((filter) => (
                      <button
                        key={filter}
                        className="rounded-full border border-[#1f2937] bg-[#090a0d] px-4 py-2 text-[12px] text-[#8f94a5] transition hover:border-[#C3FF51] hover:text-[#C3FF51]"
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {historyItems.map((item) => (
                    <div
                      key={`${item.name}-${item.status}`}
                      className="flex items-center justify-between rounded-[28px] border border-[#1f2937] bg-[#080809] p-5"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#0c0d12] text-[14px] font-bold text-[#C3FF51]">
                          {item.name[0]}
                        </div>
                        <div>
                          <p className="text-[15px] font-semibold text-white">
                            {item.name}
                          </p>
                          <p className="text-[12px] text-[#8f94a5]">
                            {item.badge}
                          </p>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-3 text-[13px] text-white">
                        <span className="font-bold">{item.status}</span>
                        <ArrowRight size={16} className="text-[#8f94a5]" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
