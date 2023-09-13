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
            <div className="bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 relative px-16 py-12 rounded-2xl min-h-full shadow-xl">
                <p className="text-white absolute w-full left-0 right-0 top-6 text-2xl tracking-wider text-bold uppercase font-primary">
                    {title}
                </p>
                <div className="h-full flex justify-center items-center">
                    {icon}
                </div>
            </div>
        </a>
    );
};
