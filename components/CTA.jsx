import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
          Ready to transform your challenges to solutions?
          </h2>
          <Link href='/contact'>
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
