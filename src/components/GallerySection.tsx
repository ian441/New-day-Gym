import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/OptimizedImage";

const galleryImages = [
  { src: "https://media.istockphoto.com/id/1162195270/photo/young-african-american-man-sitting-and-lifting-a-dumbbell-with-the-rack-at-gym.jpg?s=612x612&w=0&k=20&c=93FRvwMBcoHRyTNRVchRpvVIqA5ZCWiyjAkU9PrmrTo=", alt: "Dumbbell workout" },
  { src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop", alt: "Strength training" },
  { src: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2024/02/45.jpg?quality=86&strip=all", alt: "Group fitness class" },
  { src: "https://media.istockphoto.com/id/2027281054/photo/young-sportswoman-doing-side-sit-ups-with-medicine-ball-while-exercising-in-health-club.jpg?s=612x612&w=0&k=20&c=TM8DPYR-2TYdqXVWVRYv_Yr8QaJyCsMFBn8Bo9OViIE=", alt: "Side sit-ups" },
  { src: "https://runnersworldonline.com.au/wp-content/uploads/2023/01/Shot-of-a-sporty-young-woman-exercising-with-dumbbells-in-a-gym-1370779226_2159x1393.jpeg", alt: "Boxing training" },
  { src: "https://media.istockphoto.com/id/1195045259/photo/get-your-body-in-balance.jpg?s=612x612&w=0&k=20&c=BPmNGwNUEqE987N7Di3HKihP0bY9hY4cHbKK4rKPVuQ=", alt: "Group fitness class" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading uppercase tracking-[0.3em] text-sm mb-3">Gallery</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            Training In <span className="text-gradient">Action</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative overflow-hidden group aspect-[3/2] min-w-0"
            >
              <OptimizedImage
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
