import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CalendarDays, MapPin, Users, Sparkles, X, Ticket, Flame } from "lucide-react";

const actors = [
  { name: "김선영", role: "배우", character: "의사                  ", quote: "무대 위에서 가장 조용한 진심까지 전하겠습니다.", color: "from-stone-900 to-red-950" },
  { name: "김영만", role: "배우", character: "샴세딘                ", quote: "인물의 숨을 따라가며 장면의 온도를 만들겠습니다.", color: "from-zinc-900 to-orange-950" },
  { name: "김종현", role: "배우", character: "니하드 / 랄프 / 민병대", quote: "흔들리는 시대 속 한 사람의 얼굴을 보여드리겠습니다.", color: "from-neutral-900 to-red-900" },
  { name: "박다현", role: "배우", character: "어린 나왈             ", quote: "뜨겁게 남은 말들을 몸으로 증명하겠습니다.", color: "from-stone-800 to-amber-950" },
  { name: "박서연", role: "배우", character: "사우다                ", quote: "침묵 너머의 마음을 관객에게 건네고 싶습니다.", color: "from-zinc-950 to-rose-950" },
  { name: "박지원", role: "배우", character: "지한 말락             ", quote: "작은 시선 하나까지 놓치지 않겠습니다.", color: "from-neutral-950 to-red-950" },
  { name: "엄지원", role: "배우", character: "노년 나왈             ", quote: "불길 속에서도 꺼지지 않는 사람의 이야기를 전합니다.", color: "from-stone-900 to-orange-900" },
  { name: "이상엽", role: "배우", character: "시몽", quote: "무대 위 진실에 끝까지 닿아보겠습니다.", color: "from-zinc-900 to-red-900" },
  { name: "이수민", role: "배우", character: "앙투완", quote: "장면마다 오래 남는 결을 만들겠습니다.", color: "from-neutral-900 to-amber-950" },
  { name: "인수민", role: "배우", character: "알퐁스 르벨 / 엘람", quote: "관객의 마음에 오래 머무는 인물을 만들겠습니다.", color: "from-stone-950 to-red-950" },
  { name: "전세영", role: "배우", character: "나지라 / 압데사마드", quote: "한 장면의 무게를 진심으로 감당하겠습니다.", color: "from-zinc-950 to-orange-950" },
  { name: "정은상", role: "배우", character: "와합 / 수위 / 남자", quote: "인물이 가진 상처와 사랑을 섬세하게 전하겠습니다.", color: "from-neutral-950 to-rose-950" },
  { name: "최서원", role: "배우", character: "중년 나왈", quote: "불타버린 자리에서 다시 말을 시작하겠습니다.", color: "from-stone-900 to-red-950" },
  { name: "최소진", role: "배우", character: "잔느", quote: "관객과 같은 숨으로 장면을 살아내겠습니다.", color: "from-zinc-900 to-amber-950" },
];

const staff = [
  { name: "임지우", role: "기획", quote: "화염을 보러 와주신 관객 여러분 감사합니다." },
  { name: "박주희", role: "연출", quote: "흩어진 장면을 하나의 질문으로 묶습니다." },
  { name: "배아현", role: "연출", quote: "배우의 호흡과 장면의 온도를 조율합니다." },
  { name: "전민지", role: "무대감독", quote: "보이지 않는 자리에서 무대의 시간을 움직입니다." },
  { name: "민채원", role: "조명", quote: "어둠과 빛 사이에 인물의 감정을 새깁니다." },
  { name: "이수민", role: "음향", quote: "침묵과 소리의 경계에서 장면을 밀어 올립니다." },
];

function runDataChecks() {
  console.assert(actors.length === 14, `배우 데이터는 14명이어야 합니다. 현재 ${actors.length}명입니다.`);
  console.assert(staff.length === 6, `스텝 데이터는 6명이어야 합니다. 현재 ${staff.length}명입니다.`);
  console.assert(actors.every((person) => person.name && person.role && person.quote), "모든 배우에게 name, role, quote가 있어야 합니다.");
  console.assert(staff.every((person) => person.name && person.role && person.quote), "모든 스텝에게 name, role, quote가 있어야 합니다.");
}

runDataChecks();

function getInitials(name) {
  return name.slice(0, 2);
}

const profileIconClass = "relative flex shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/30 font-semibold leading-none tracking-tight text-stone-100 shadow-inner";

function ProfileInitial({ name }) {
  return (
    <div
      className={profileIconClass}
      style={{
        width: "138px",
        height: "138px",
        minWidth: "138px",
        minHeight: "138px",
        maxWidth: "138px",
        maxHeight: "138px",
        flexBasis: "138px",
        fontSize: "46px",
        boxSizing: "border-box",
        lineHeight: 1,
      }}
    >
      {getInitials(name)}
    </div>
  );
}

function PersonCard({ person, type, onClick }) {
  return (
    <motion.button
      layout
      onClick={() => onClick(person)}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-4 text-left shadow-2xl shadow-black/20 backdrop-blur transition"
    >
      <div className={`relative mb-4 flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${person.color || "from-stone-900 to-red-950"}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.24),transparent_28%),radial-gradient(circle_at_65%_75%,rgba(248,113,113,0.25),transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" />
        <ProfileInitial name={person.name} />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-medium text-stone-100 backdrop-blur">{type}</span>
          <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-medium text-red-100 backdrop-blur">Profile</span>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-red-200">{person.role}</p>
        <h3 className="text-xl font-bold text-white">{person.name}</h3>
        <p className="text-sm leading-6 text-stone-300">{person.character || person.quote}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 transition group-hover:ring-red-300/40" />
    </motion.button>
  );
}

function ProfileModal({ selected, onClose }) {
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#120d0b] shadow-2xl sm:grid-cols-[0.9fr_1.1fr]"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white transition hover:bg-white/15"
              aria-label="닫기"
            >
              <X size={20} />
            </button>
            <div className={`relative min-h-[320px] bg-gradient-to-br ${selected.color || "from-stone-900 to-red-950"}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(239,68,68,0.32),transparent_35%)]" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ProfileInitial name={selected.name} />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="mb-2 text-sm font-medium text-red-200">{selected.role}</p>
                <h2 className="text-4xl font-black tracking-tight text-white">{selected.name}</h2>
              </div>
            </div>
            <div className="space-y-6 p-7 sm:p-9">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-300">Character</p>
                <h3 className="text-2xl font-bold text-white">{selected.character || selected.role}</h3>
              </div>
              <blockquote className="rounded-2xl border border-red-300/15 bg-red-500/10 p-5 text-lg leading-8 text-red-50">
                “{selected.quote}”
              </blockquote>
              <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-stone-300">
                실제 프로필 사진을 추가하면 이 창에서 이름, 역할, 배역, 한 줄 문장이 중심이 되도록 보입니다.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function PerformanceProfilePromoSite() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("actors");
  const [selected, setSelected] = useState(null);

  const filteredActors = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return actors.filter((person) => `${person.name} ${person.role} ${person.character}`.toLowerCase().includes(normalizedQuery));
  }, [query]);

  const filteredStaff = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return staff.filter((person) => `${person.name} ${person.role}`.toLowerCase().includes(normalizedQuery));
  }, [query]);

  const currentList = tab === "actors" ? filteredActors : filteredStaff;

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0807] text-stone-100">
      <section className="relative isolate px-5 py-8 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(185,28,28,0.45),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,0.18),transparent_32%),linear-gradient(180deg,#160b08_0%,#0b0807_72%)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-800/20 blur-3xl" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-200">
              <Flame size={20} />
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.24em] text-white">INCENDIES</p>
              <p className="text-xs text-stone-400">공연 프로필 아카이브</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <a href="https://smore.im/form/Z5epq9G2fj" target="_blank" rel="noreferrer" className="rounded-full bg-red-500 px-5 py-2 text-sm font-bold text-white transition hover:bg-red-400">
              예약하기
            </a>
            <a href="#rehearsal" className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 text-sm font-bold text-white transition hover:bg-white/10">
              연습 사진
            </a>
            <a href="#profiles" className="rounded-full bg-white px-5 py-2 text-sm font-bold text-stone-950 transition hover:bg-red-100">
              프로필 보기
            </a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-16 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pt-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200/20 bg-red-500/10 px-4 py-2 text-sm text-red-100">
              <Sparkles size={16} /> 배우  · 스텝  공식 프로필
            </div>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
               수원여자대학교 <span className="bg-gradient-to-r from-red-200 via-orange-200 to-stone-100 bg-clip-text text-transparent"> 연기영상과.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
                공연을 만든 배우와 스텝를 담은 홍보용 웹사이트입니다.<br />
                프로필 카드를 눌러 확인할 수 있습니다.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#profiles" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-7 py-4 text-base font-bold text-white shadow-xl shadow-red-950/40 transition hover:bg-red-400">
                <Users size={19} /> 참여진 프로필 보기
              </a>
              <a href="#rehearsal" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/10">
                연습 사진 보기
              </a>
              <a href="https://smore.im/form/Z5epq9G2fj" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/10">
                <Ticket size={19} /> 예약하러 가기
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-red-700/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-[radial-gradient(circle_at_40%_20%,rgba(254,202,202,0.24),transparent_28%),linear-gradient(135deg,#2b0b08,#090605_55%,#581c1c)] p-6">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex justify-between text-sm text-red-100/80">
                    <span>Official Archive</span>
                    <span>2026</span>
                  </div>
                  <div className="space-y-4">
                    <div className="h-1 w-24 rounded-full bg-red-200/70" />
                    <h2 className="text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl">화염</h2>
                    <p className="max-w-xs text-sm leading-6 text-stone-300">
                      배우와 스텝의 이름이 하나의 불씨처럼 모여,<br /> 
                      관객에게 공연의 첫인상을 남깁니다.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {["14 Actors", "6 Staff"].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-black/25 p-3 text-center text-xs font-semibold text-stone-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="info" className="border-y border-white/10 bg-white/[0.03] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
            <CalendarDays className="mb-4 text-red-200" />
            <p className="text-sm text-stone-400">공연 일시</p>
            <h3 className="mt-1 text-xl font-bold text-white"> 5월 29일 19시/ 5월 30일 14시 18시</h3>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
            <MapPin className="mb-4 text-red-200" />
            <p className="text-sm text-stone-400">공연 장소</p>
            <h3 className="mt-1 text-xl font-bold text-white">수원여자대학교 말리극장</h3>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
            <Ticket className="mb-4 text-red-200" />
            <p className="text-sm text-stone-400">예매/문의</p>
            <a
              href="https://smore.im/form/Z5epq9G2fj"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-red-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-400"
            >
              예약하러 가기
            </a>
          </div>
        </div>
      </section>

      <section id="rehearsal" className="px-5 py-18 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-300">Rehearsal</p>
              <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">연습 사진</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-stone-400 lg:justify-self-end">
              공연이 완성되기 전, 배우와 스텝이 함께 쌓아온 시간을 담는 공간입니다. 실제 연습 사진을 넣으면 관객이 무대 뒤의 과정까지 함께 느낄 수 있습니다.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_28%),linear-gradient(135deg,#22100d,#090605_60%,#3f0f0f)] p-6 shadow-2xl shadow-black/30">
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-6 flex items-center justify-center rounded-[1.5rem] border border-dashed border-white/20 bg-black/20 text-center backdrop-blur-[1px]">
                <div className="space-y-3 px-6">
                  <p className="text-5xl font-black text-white/80">+</p>
                  <p className="text-lg font-bold text-white">대표 연습 사진 넣는 곳</p>
                  <p className="text-sm leading-6 text-stone-300">
                    예: 전체 배우 리딩, 장면 연습, 무대 동선 연습 사진
                  </p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-red-200">Behind the Scene</p>
                <h3 className="text-3xl font-black text-white sm:text-4xl">무대가 되기 전의 시간</h3>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {["장면 연습", "리딩 연습", "스텝 회의"].map((title, index) => (
                <div key={title} className="relative min-h-[125px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-5 shadow-xl shadow-black/20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.2),transparent_32%)]" />
                  <div className="relative flex h-full items-center gap-4">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-black/25 text-2xl font-black text-white/60">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-stone-400">
                        사진을 넣은 뒤 짧은 설명을 적어주세요.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="profiles" className="px-5 py-18 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-300">Profiles</p>
              <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">참여진 프로필</h2>
              <p className="max-w-2xl text-base leading-7 text-stone-400">
                검색하거나 카드를 눌러 배우와 스텝의 역할, 배역, 한 줄 문장을 확인할 수 있습니다.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 lg:w-auto lg:min-w-[420px]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" size={18} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="이름 또는 역할 검색"
                  className="w-full rounded-full border border-white/10 bg-white/[0.06] py-4 pl-12 pr-5 text-sm text-white outline-none placeholder:text-stone-500 focus:border-red-300/50"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1">
                <button onClick={() => setTab("actors")} className={`rounded-full px-5 py-3 text-sm font-bold transition ${tab === "actors" ? "bg-white text-stone-950" : "text-stone-300 hover:bg-white/10"}`}>
                  배우 14명
                </button>
                <button onClick={() => setTab("staff")} className={`rounded-full px-5 py-3 text-sm font-bold transition ${tab === "staff" ? "bg-white text-stone-950" : "text-stone-300 hover:bg-white/10"}`}>
                  스텝 6명
                </button>
              </div>
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {currentList.map((person) => (
                <motion.div key={`${person.name}-${person.role}`} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}>
                  <PersonCard person={person} type={tab === "actors" ? "Actor" : "Staff"} onClick={setSelected} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {currentList.length === 0 && (
            <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center text-stone-400">
              검색 결과가 없습니다. 이름이나 역할을 다시 입력해주세요.
            </div>
          )}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-red-200/15 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.28),transparent_30%),linear-gradient(135deg,#1c0d0a,#090605)] p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-red-200">For Audience</p>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">공연을 보기 전,<br /> 
                인물들의 얼굴을 먼저 만나보세요.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
                관객이 공연 전후로 배우와 스텝을 기억하게 만드는 작은 아카이브입니다.
              </p>
            </div>
            <a href="#profiles" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-black text-stone-950 transition hover:bg-red-100">
              지금 프로필 보기 <Users size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-stone-500 sm:px-8 lg:px-12">
        <p>© 2026 INCENDIES Profile Archive. 저희 공연을 보러 와주셔서 대단히 감사드립니다 즐거운 시간 되세요.</p>
      </footer>

      <ProfileModal selected={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
