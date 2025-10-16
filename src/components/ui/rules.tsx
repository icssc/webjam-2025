import Link from "next/link";

export function Rules() {
  return (
    <div className="flex flex-col items-center justify-center my-24">
      <div className="z-10 w-[80%] space-y-8">
        <div className="flex text-7xl font-semibold">
          Rules & Code of Conduct
        </div>

        <span className="block text-2xl">
          By participating in WebJam, you agree to abide by&nbsp;
          <Link
            href="https://drive.google.com/file/d/1_OfC_ZJatvuQHCF8C3rziFulZEso_m7c/view"
            target="_blank"
          >
            <span className="underline underline-offset-2">
              our rules & code of conduct
            </span>
          </Link>
          .
        </span>
      </div>
    </div>
  );
}

export default Rules;
