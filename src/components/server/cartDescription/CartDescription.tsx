import Image from "next/image";

import "./cartDescription.scss";

export default function CartDescription() {
  return (
    <section className="cart-description">
      <Image
        src="/office.jpg"
        width="0"
        height="0"
        sizes="100vw"
        alt="Logo"
        priority
        className="cart-img"
      />
      <p>
        Secure your belongings hassle-free with our convenient Locker Rentals at
        Meryal. Enjoy the freedom to explore the park without the burden of
        carrying your valuables. Our full-day locker rental service ensures a
        worry-free experience, providing a safe and spacious storage solution
        for your personal items. With daily rentals available, you can focus on
        making a splash and creating lasting memories while we take care of
        keeping your belongings safe and sound
      </p>
    </section>
  );
}
