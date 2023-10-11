import ServiceItem from "../../domain/interface/ServiceItem";

const ServiceCard = ({ image, title, description }: ServiceItem) => {
    return (
      <>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-8 rounded-[20px] bg-white h-[60vh] p-10 flex flex-col justify-center shadow-md hover:shadow-lg md:px-7 xl:px-10 cursor-pointer">
            <div className={`mb-8 flex p-3 items-center justify-center`}>
                <img src={image} className="h-[130px] w-[130px]" alt="title" />
            </div>
            <h4 className="mb-3 text-xl font-semibold text-dark">{title}</h4>
            <p className="text-body-color">{description}</p>
          </div>
        </div>
      </>
    );
  };

  export default ServiceCard