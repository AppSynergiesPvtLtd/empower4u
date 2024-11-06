import Link from 'next/link';
import Image from 'next/image';

const SuccessPage: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 text-center text-maintext bg-white">
      <div className="container mx-auto max-w-md">
        <Image
          src="/images/Career/Work with us page.jpg"
          alt="Success"
          width={300}
          height={300}
          className="mb-8"
        />
        <p className="text-2xl font-semibold mb-4 text-maintext">
          Thank you for reaching out! We have received your message and will be in touch with you shortly.
        </p>
        <Link href="/" passHref>
          <a className="px-6 py-3 mt-6 bg-maintext text-white rounded-full hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-maintext">
            Home
          </a>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
