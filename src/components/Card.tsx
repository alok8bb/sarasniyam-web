interface ServiceCardProps {
    title: string;
    icon: React.ReactElement;
    link?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    icon,
    link,
}) => {
    return (
        <a href={link}>
            <div className="bg-card-gradient hover:transition ease-in-out hover:-translate-y-4 duration-300 relative px-16 py-12 rounded-2xl min-h-full shadow-xl">
                <p className="text-white absolute w-full left-0 right-0 top-6 text-2xl tracking-wider font-bold uppercase font-primary text-center">
                    {title}
                </p>
                <div className="h-full flex justify-center items-center">
                    {icon}
                </div>
            </div>
        </a>
    );
};
