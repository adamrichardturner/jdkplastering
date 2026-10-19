import Image from 'next/image'

const SSIP_HREF = 'https://ssip.org.uk/about/'
const SSIP_SRC = '/credentials/SSIP-Accreditation.png'

type SsipAccreditationProps = {
  variant: 'feature' | 'compact'
}

export default function SsipAccreditation({ variant }: SsipAccreditationProps) {
  if (variant === 'compact') {
    return (
      <a
        href={SSIP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex max-w-full flex-col items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg transition-opacity hover:opacity-90 sm:flex-row sm:gap-4 sm:px-5"
      >
        <Image
          src={SSIP_SRC}
          alt=""
          width={670}
          height={450}
          className="h-14 w-auto sm:h-16"
        />
        <span className="text-center sm:text-left">
          <span className="block text-sm font-semibold text-slate-900">
            SSIP Accredited
          </span>
          <span className="block text-xs leading-snug text-slate-600">
            Independently assessed UK health & safety
          </span>
        </span>
      </a>
    )
  }

  return (
    <a
      href={SSIP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full max-w-3xl flex-col items-center gap-5 rounded-3xl bg-white px-6 py-6 text-center shadow-2xl transition-transform duration-200 hover:-translate-y-0.5 sm:flex-row sm:gap-8 sm:px-8 sm:py-7 sm:text-left"
    >
      <Image
        src={SSIP_SRC}
        alt=""
        width={670}
        height={450}
        className="h-24 w-auto shrink-0 sm:h-28"
      />
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">
          Health & safety
        </span>
        <span className="mt-1 block text-xl font-bold text-slate-900">
          SSIP Accredited
        </span>
        <span className="mt-2 block text-sm leading-relaxed text-slate-600">
          Our health and safety arrangements have been independently assessed
          against the UK SSIP Core Criteria, the standard recognised by the
          Health and Safety Executive and used by buyers across construction.
        </span>
      </span>
    </a>
  )
}
