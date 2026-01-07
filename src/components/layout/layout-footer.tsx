"use client";

import Image from "next/image";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { Field, FieldTitle } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Text from "@/components/text";
import Link from "next/link";
import { footerLinks } from "@/constants/footer-links";
import type { FormEvent } from "react";
import { useFadeIn } from "@/lib/use-fade-in";

export default function LayoutFooter() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <footer
      id="contact"
      ref={ref}
      className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 my-16 responsive-horizontal"
    >
      <LayoutFooterTitle />
      <LayoutFooterContactForm />

      <div className="flex flex-col items-center justify-between lg:items-end">
        <LayoutFooterIllustration />
        <LayoutFooterSocialMedia />
      </div>
    </footer>
  );
}

function LayoutFooterTitle() {
  return (
    <div className="flex flex-col col-span-full">
      <Title size="md" weight="bold" className="text-center lg:text-left">
        BİZE ULAŞIN:
      </Title>
      <Title size="md" weight="bold" className="text-center lg:text-left">
        DİJİTALLEŞME YOLCULUĞUNUZA EŞLİK EDELİM!
      </Title>
    </div>
  );
}

function LayoutFooterSocialMedia() {
  return (
    <div className="flex items-center gap-4">
      {footerLinks.map(({ title, ...link }) => (
        <LayoutFooterSocialMediaLink key={title} {...link} />
      ))}
    </div>
  );
}

function LayoutFooterSocialMediaLink({
  icon,
  href,
}: {
  icon: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        size="icon"
        className="bg-transparent hover:bg-transparent hover:cursor-pointer transition-all duration-250 hover:scale-[1.1]"
      >
        <Image
          src={icon}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </Button>
    </Link>
  );
}

function LayoutFooterContactForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget as HTMLFormElement;

    const formData = new FormData(f);
    const getField = (key: "name" | "phone" | "email" | "message") => {
      const v = formData.get(key);
      return typeof v === "string" ? v.trim() : "";
    };

    const payload = {
      name: getField("name"),
      phone: getField("phone"),
      email: getField("email"),
      message: getField("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.ok) {
        alert("Teşekkürler! Mesajınız ulaştı.");
        f.reset();
      } else {
        alert("Gönderilemedi: " + (data.error || "Sunucu hatası"));
      }
    } catch (err) {
      console.error("Hata:", err);
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
    }
  };

  return (
    <form
      className="flex flex-col gap-3 mx-auto max-w-[640px] lg:mx-0 lg:max-w-full"
      onSubmit={handleSubmit}
    >
      <Field>
        <FieldTitle>Adınız ve Soyadınız</FieldTitle>
        <Input name="name" placeholder="Adınız ve Soyadınız" />
      </Field>
      <Field>
        <FieldTitle className="text-base font-bold">
          İletişim Numaranız
        </FieldTitle>
        <Input name="phone" placeholder="İletişim Numaranız" />
      </Field>
      <Field>
        <FieldTitle>E-posta Adresiniz</FieldTitle>
        <Input name="email" placeholder="E-posta Adresiniz" />
      </Field>
      <Field>
        <FieldTitle>Mesajınız</FieldTitle>
        <Textarea
          name="message"
          className="resize-none h-24"
          placeholder="Mesajınız"
        />
      </Field>
      <Button
        type="submit"
        className="mt-4 bg-[#bb74ca] font-bold text-base"
        size="lg"
      >
        Gönder
      </Button>
      <div className="flex flex-col mt-4">
        <Text size="xs" weight="bold">
          Ticari Unvan: Biri İleri Teknoloji Bilişim Sanayi ve Ticaret A.Ş.
        </Text>
        <Text size="xs" weight="bold">
          Ticaret Sicil Numarası: 78086
        </Text>
        <Text size="xs" weight="bold">
          Mersis Numarası: 0177081335200001
        </Text>
        <Text size="xs" weight="bold">
          Şehitkamil/Gaziantep
        </Text>
      </div>
    </form>
  );
}

function LayoutFooterIllustration() {
  return (
    <figure className="relative shrink-0 size-[200px] md:size-[320px] lg:size-[360px] xl:size-[400px] select-none">
      <Image
        src="/vectors/vector-12.svg"
        alt=""
        fill
        sizes="
      (max-width: 640px) 200px,
      (max-width: 768px) 320px,
      (max-width: 1024px) 360px,
      400px
      "
        loading="lazy"
        className="w-full h-full object-contain"
      />
    </figure>
  );
}
