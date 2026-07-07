type Feature = {
    title: string;
    description: string;
    icon: string;
};

type FeatureCardProps = {
    feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
    return (
        <div
            className="
            group
            rounded-3xl
            border
            border-border
            bg-surface
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-[0.5px]
            hover:border-primary/50
            hover:shadow-md
            hover:shadow-glow
            "
        >

            <div
                className="
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-primary/10
                text-primary
                transition-all
                group-hover:bg-primary
                group-hover:text-white
                "
            >

                <span className="material-symbols-outlined text-3xl">
                    {feature.icon}
                </span>

            </div>

            <h3 className="mb-3 text-xl font-semibold">

                {feature.title}

            </h3>

            <p className="leading-7 text-on-surface-variant">

                {feature.description}

            </p>

        </div>
    );
}