import React from "react";
import ServiceCard from "./ServiceCard";
import ServicesData from "../../domain/ServicesData";
import ServiceItem from "../../domain/interface/ServiceItem";

const ServicesSection = () => {
  return (
    <section className="pt-10 pb-12 lg:pt-[50px] lg:pb-[90px] bg-[#101528]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="block mb-2 text-2xl text-white font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-4 text-3xl font-bold text-white text-dark sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color text-white">
              Unlock international opportunities with our comprehensive export services. 
              From Product positioning to Low cost marketing, we pave the way for your products to reach 
              the world.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {ServicesData.map((item: ServiceItem, index: number) => {
            return (
              <ServiceCard
                title={item.title}
                description={item.description}
                image={item.image}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
