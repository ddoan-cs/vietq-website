import Container from "./Container";
import JoinOurCommunity from "./JoinOurCommunity";

import { navigation } from "@/lib/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white border-t border-blue-800">
      <Container>
        <div className="divide-y divide-blue-800">
          <div className="space-y-8 pb-8">
            <div className="flex items-center justify-between space-x-32">
              <h1 className="text-3xl font-bold tracking-tight">VietQ</h1>
              <div className="flex items-start pt-4 justify-end space-x-8">
                {navigation.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className="uppercase tracking-widest text-sm hover:text-gray-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="tracking-tighter text-xl font-semibold">
                Subscribe to our newsletter
              </h3>
              <JoinOurCommunity footer={true} />
            </div>
          </div>
          <div className="pt-8 flex items-center justify-between space-x-16">
            <small className="uppercase tracking-widest">
              Copyright @ {new Date().getFullYear()} VietQ / Made by Dubvelopers
              with{" "}
              <span className="hover:text-red-200 transition-colors">love</span>{" "}
              and support
            </small>
            <div className="flex items-center justify-end space-x-6">
              <SocialIcon
                href="https://www.facebook.com/vietq.community"
                src="/socials/facebook.svg"
                alt="Facebook"
              />
              <SocialIcon
                href="https://www.instagram.com/vietq.community"
                src="/socials/instagram.svg"
                alt="Instagram"
              />
              <SocialIcon
                href="https://www.twitter.com/vietq.community"
                src="/socials/twitter.svg"
                alt="Twitter"
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function SocialIcon({ href, src, alt }) {
  return (
    <div className="hover:opacity-50 transition-opacity">
      <a href={href}>
        <Image src={src} alt={alt} className="w-6 h-6" width={24} height={24} />
      </a>
    </div>
  );
}
