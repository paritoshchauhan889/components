"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, ChevronLeft, ChevronRight, X } from "lucide-react";

const CarouselCard = ({ item, onClick }: { item: any; onClick: () => void }) => {
  return (
    <div className="min-w-[180px] sm:min-w-[200px] md:min-w-[220px] flex-shrink-0">
      <Card className="border-none shadow-none rounded-xl overflow-hidden group relative py-2 sm:py-4">
        <CardContent className="p-0 relative">
          <img
            src={item.image}
            alt={item.title}
            className="h-48 sm:h-60 md:h-72 lg:h-80 w-full object-cover rounded-xl transition duration-300"
          />

          {/* Hover overlay always visible */}
          <div className="absolute inset-0 bg-black/50 opacity-0 rounded-xl group-hover:opacity-100 transition flex items-center justify-center">
            <button 
              onClick={onClick}
              className="bg-black/50 rounded-full p-2 sm:p-3 hover:bg-black/70 transition-colors"
            >
              <Play color="white" className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Title + Arrow outside the card */}
      <a
        href={item.link}
        className="ml-2 flex items-center gap-1 text-xs sm:text-sm font-medium text-gray-800 hover:text-primary mt-2"
      >
        {item.title}
        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
      </a>
    </div>
  );
};

const StoryModal = ({
  items,
  currentStoryIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: {
  items: any[];
  currentStoryIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    setProgress(0);
    const duration = 5000; // 5 seconds
    const interval = 50;
    const increment = (interval / duration) * 100;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          onNext();
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(progressTimer);
  }, [currentStoryIndex, isOpen, onNext]);

  if (!isOpen) return null;

  const currentItem = items[currentStoryIndex];

  return (
    <div
      className="fixed  inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40 p-2 sm:p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
      >
        <X className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Mobile: Stack vertically, Desktop: Flex row */}
      <div
        className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-full max-w-sm sm:max-w-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation buttons - hidden on mobile, shown on larger screens */}
        <button
          onClick={onPrev}
          className="hidden sm:block bg-white rounded-md p-2 shadow-md hover:bg-gray-100 disabled:opacity-50 transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6 lg:h-10 lg:w-10 text-[#3a7e8d]" />
        </button>

        {/* Story content */}
        <div className="relative w-full max-w-sm sm:max-w-md">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-[70vh] sm:h-screen object-cover rounded-xl"
          />

          {/* Mobile navigation buttons overlay */}
          <div className="absolute inset-y-0 flex items-center justify-between px-2 sm:hidden">
            <button
              onClick={onPrev}
              className="bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-[#3a7e8d]" />
            </button>
            <button
              onClick={onNext}
              className="bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-[#3a7e8d]" />
            </button>
          </div>

          {/* Story info */}
          <div className="absolute bottom-16 sm:bottom-24 left-4 right-4 text-white drop-shadow-md">
            <h3 className="text-lg sm:text-xl font-bold mb-1">{currentItem.title}</h3>
            <p className="text-xs sm:text-sm opacity-80">{currentItem.subtitle}</p>
          </div>

          {/* Bottom indicators */}
          <div className="absolute bottom-8 sm:bottom-12 left-4 right-4 flex gap-1 sm:gap-2 justify-center">
            {items.map((_, index) => (
              <div
                key={index}
                className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
              >
                <div
                  className="h-full bg-white rounded-full transition-all duration-100"
                  style={{
                    width:
                      index < currentStoryIndex
                        ? "100%"
                        : index === currentStoryIndex
                        ? `${progress}%`
                        : "0%",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop next button */}
        <button
          onClick={onNext}
          className="hidden sm:block bg-white rounded-md p-2 shadow-md hover:bg-gray-100 disabled:opacity-50 transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6 lg:h-10 lg:w-10 text-[#3a7e8d]" />
        </button>
      </div>
    </div>
  );
};

const Carousel1 = () => {
  const items = [
    { title: "Blue Lagoon", subtitle: "Experience the natural wonder", image: "https://cdn.pixabay.com/photo/2012/03/01/00/28/animal-19621_1280.jpg", link: "#" },
    { title: "Retreat Hotel", subtitle: "Luxury accommodation", image: "https://cdn.pixabay.com/photo/2020/08/19/17/44/buzzard-5501613_1280.jpg", link: "#" },
    { title: "Retreat Spa", subtitle: "Rejuvenation and wellness", image: "https://cdn.pixabay.com/photo/2023/12/11/12/51/lynx-8443540_1280.jpg", link: "#" },
    { title: "Silica Hotel", subtitle: "Modern comfort meets nature", image: "https://cdn.pixabay.com/photo/2018/09/08/15/29/squirrel-3662681_1280.jpg", link: "#" },
    { title: "Restaurants", subtitle: "Culinary excellence", image: "https://cdn.pixabay.com/photo/2016/11/20/11/09/winter-1842508_1280.jpg", link: "#" },
    { title: "More Dining", subtitle: "Diverse flavors await", image: "https://cdn.pixabay.com/photo/2019/04/26/11/34/snake-4157313_1280.jpg", link: "#" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  // Create truly infinite array by repeating items multiple times
  const getInfiniteItems = () => {
    const repetitions = Math.max(10, Math.ceil(20 / items.length));
    const infiniteArray = [];
    for (let i = 0; i < repetitions; i++) {
      infiniteArray.push(...items);
    }
    return infiniteArray;
  };

  const infiniteItems = getInfiniteItems();
  
  // Responsive item width calculation
  const getItemWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 180 + 16; // sm breakpoint
      if (window.innerWidth < 768) return 200 + 20; // md breakpoint
      return 220 + 24; // default
    }
    return 220 + 24; // fallback for SSR
  };

  const [itemWidth, setItemWidth] = useState(getItemWidth());
  const middleIndex = Math.floor(infiniteItems.length / 2);

  // Update item width on resize
  useEffect(() => {
    const handleResize = () => {
      setItemWidth(getItemWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  // Handle infinite loop reset without user noticing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      
      if (currentIndex > middleIndex + items.length) {
        setCurrentIndex(middleIndex);
      } else if (currentIndex < middleIndex - items.length) {
        setCurrentIndex(middleIndex);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [currentIndex, middleIndex, items.length]);

  // Initialize at middle position
  useEffect(() => {
    setCurrentIndex(middleIndex);
  }, [middleIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (isStoryOpen) return;
    
    const autoPlay = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(autoPlay);
  }, [isTransitioning, isStoryOpen]);

  // Story modal handlers
  const openStory = (clickedItemIndex: number) => {
    const originalIndex = clickedItemIndex % items.length;
    setCurrentStoryIndex(originalIndex);
    setIsStoryOpen(true);
  };

  const closeStory = () => {
    setIsStoryOpen(false);
  };

  const nextStory = () => {
    setCurrentStoryIndex(prev => (prev + 1) % items.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex(prev => (prev - 1 + items.length) % items.length);
  };

  return (
    <>
      <section className="relative p-4 sm:p-8 md:p-12 lg:p-20">
        <h1 className="text-left text-[#454647] font-extrabold tracking-tight text-xs sm:text-sm lg:text-sm/6">
          An experience beyond compare awaits
        </h1>
        <p className="text-left text-[#454647] text-lg sm:text-xl md:text-2xl font-semibold tracking-tight mt-1 sm:mt-2">
          A visual journey through one of the wonders of the world
        </p>

        <div className="relative mt-4 sm:mt-6">
          {/* Left Button - Hidden on mobile */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="hidden sm:block absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white rounded-md p-2 shadow-md hover:bg-gray-100 disabled:opacity-50 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-[#3a7e8d]" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className={`flex gap-4 sm:gap-5 md:gap-6 transition-transform duration-300 ease-in-out ${isTransitioning ? '' : 'transition-none'}`}
              style={{
                transform: `translateX(-${currentIndex * itemWidth}px)`,
                width: `${infiniteItems.length * itemWidth}px`
              }}
            >
              {infiniteItems.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <CarouselCard 
                    item={item} 
                    onClick={() => openStory(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Button - Hidden on mobile */}
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="hidden sm:block absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white rounded-md p-2 shadow-md hover:bg-gray-100 disabled:opacity-50 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-[#3a7e8d]" />
          </button>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-4 sm:hidden">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 disabled:opacity-50 transition-all duration-200"
            >
              <ChevronLeft className="h-5 w-5 text-[#3a7e8d]" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 disabled:opacity-50 transition-all duration-200"
            >
              <ChevronRight className="h-5 w-5 text-[#3a7e8d]" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 sm:mt-6 gap-1 sm:gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(middleIndex + index);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                (currentIndex - middleIndex + items.length) % items.length === index
                  ? 'bg-[#3a7e8d] w-4 sm:w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Story Modal */}
      <StoryModal
        items={items}
        currentStoryIndex={currentStoryIndex}
        isOpen={isStoryOpen}
        onClose={closeStory}
        onNext={nextStory}
        onPrev={prevStory}
      />
    </>
  );
};

export default Carousel1;