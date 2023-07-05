// eslint-disable-next-line no-unused-vars
import React from "react";
import CardCustom from "../components/CardCustom";

const OurPackage = () => {
  const vegetables = [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5b35b18af93fd4d75e591f4a/1543985895500-98LX8K027J1RWKQWFGAH/HS-Website---Vegetable-Products.jpg?format=2500w",
      alt: "image1",
      title: "Fresh Vegetables",
      desc: "Sayuran segar langsung dari sumber pertanian terbaik.",
    },
    {
      url: "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/How-to-store-fruit-to-keep-it-fresh-resized.jpg",
      alt: "image2",
      title: "Fresh Fruits",
      desc: "Buah dengan kualitas terbaik dari local atau import dan harga yang menarik.",
    },
    {
      url: "https://www.advotics.com/wp-content/uploads/2021/12/pengiriman-barang-delivery-planning-system-3-1024x558.png",
      alt: "image3",
      title: "Instant Delivery",
      desc: "Di kirim instan oleh kurir yang telah di training dengan SOP untuk menjaga kondisi belanja kamu.",
    },
    {
      url: "https://media.istockphoto.com/id/941858854/photo/herbs-and-spices-for-cooking-on-dark-background.jpg?s=612x612&w=0&k=20&c=-quRLbD1Hkd2-i_I-uqJltiA516alqGNojlobB6nZ7A=",
      alt: "image4",
      title: "Kitchen Ingredient",
      desc: "Bumbu dapur lengkap untuk keperluan memasak kamu.",
    },
    {
      url: "https://www.countrydoor.com/dw/image/v2/BBVM_PRD/on/demandware.static/-/Sites-colony-master-catalog/default/dwe096414f/large/sub_40/sw787938_Black_alt.png?sw=680&sh=680&sm=fit",
      alt: "image5",
      title: "Kitchen Set",
      desc: "Segala jenis alat masa untuk membantu kamu memasak.",
    },
    {
      url: "https://knifewear.com/cdn/shop/articles/pegboard_wall_1_1024x.jpg?v=1662571041",
      alt: "image6",
      title: "Bunding Set",
      desc: "Bingung masak apa? sudah tersedia paket untuk kamu masak di dapur mu.",
    },
  ];

  return (
    <div id="package" className="w-full h-full mt-20 ">
      <div className="flex justify-center py-16  bg-[#ccfbf1]">
        <h1 className="text-5xl sm:text-3xl font-semibold">Our Package</h1>
      </div>

      <div className="lg:grid lg:grid-cols-3 sm:flex sm:flex-col sm:items-center sm:gap-y-5 justify-items-center gap-5 container max-w-7xl mx-auto py-5">
        {vegetables?.map((item, index) => (
          <div key={index}>
            <CardCustom
              src={item.url}
              alt={item.alt}
              title={item.title}
              desc={item.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPackage;
