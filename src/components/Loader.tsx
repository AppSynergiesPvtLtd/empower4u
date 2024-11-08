
"use client";
const Loader = () => {
  return (
    <div className="relative w-12 h-12">
      <div className="loader before:absolute before:content-[''] before:border-l-[24px] before:border-r-[24px] before:border-[#aa8d6d] before:h-6 before:w-0 before:left-1/2 before:-translate-x-1/2 before:top-0 before:animate-splitX after:absolute after:content-[''] after:w-full after:h-6 after:bg-[#aa8d6d] after:left-0 after:bottom-0 after:animate-moveY"></div>

      <style jsx>{`
        @keyframes splitX {
          0% {
            width: 0;
            transform: translate(-50%, 0);
          }
          33% {
            width: 100%;
            transform: translate(-50%, 0);
          }
          66% {
            width: 100%;
            transform: translate(-50%, 24px);
          }
          100% {
            width: 0;
            transform: translate(-50%, 24px);
          }
        }

        @keyframes moveY {
          0%,
          33% {
            transform: translateY(0);
          }
          66%,
          100% {
            transform: translateY(-24px);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
