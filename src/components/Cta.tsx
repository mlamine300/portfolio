import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      {/* Call to Action Section */}
      <div className="py-6 md:py-12 px-6 rounded-2xl text-center mt-8 md:mt-20">
        <h2 className="text-xl md:text-4xl font-bold mb-4">
          Ready to Work Together?
        </h2>
        <p className="mb-2 text-lg md:text-2xl">
          {
            " Let's create something amazing! Contact me today to discuss your project."
          }
        </p>
      </div>

      <Button asChild className="md:p-8 md:text-3xl text-xl p-2">
        <Link href="/contact">Contact me</Link>
      </Button>
    </section>
  );
};

export default Cta;
