"use client";

import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.jpeg",
    name: "Mortaza Baqeri",
    job: "Fullstack Developer",
    review:
    "Bonded over an innovation camp, Gurjot impressed me as dedicated and kind. Our shared school and work experiences, including teaching and ambassador roles, highlighted his team spirit and generosity. Excited for future projects together.",
  },
  {
    avatar: "/reviews/avatar-2.jpeg",
    name: "Tharusan Julian",
    job: "Backend Developer",
    review:
      "Gurjot, known for his kindness and eagerness to help, often puts others before himself. His capability in programming and problem-solving is matched by his leadership qualities. Gurjot's combination of technical skills and compassion sets him apart.",
  },
  {
    avatar: "/reviews/avatar-3.jpg",
    name: "Okab Mussie",
    job: "Test Engineer",
    review:
      "Gurjot excels in challenging environments, showing remarkable responsibility and teamwork skills. His helpful nature and leadership abilities stand out, making him a dependable group member.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider  */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image  */}
                      <Image className="rounded-full"
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority 
                      />
                      {/* name  */}
                      <div className="flex flex-col">
                        <CardTitle className="pt-1">{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
