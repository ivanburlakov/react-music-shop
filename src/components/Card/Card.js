import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import Shiitake from "shiitake";

export default function Card({ title, price, src }) {
  const [openCalled, setOpenCalled] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isClosed, setClosed] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  function handleImageLoaded() {
    setImageLoaded(true);
  }

  function handleOpenCalled() {
    setClosed(false);
    setOpen(false);
    setOpenCalled(!openCalled);
  }

  function handleCardLayout() {
    if (!openCalled) {
      setClosed(true);
      setOpen(false);
    } else {
      setClosed(false);
      setOpen(true);
    }
  }

  useEffect(() => {
    openCalled && (document.body.style.overflow = "hidden");
    !openCalled && (document.body.style.overflow = "unset");
  }, [openCalled]);

  return (
    <div className="card-place">
      <div
        style={{ zIndex: isClosed ? 0 : 1 }}
        className="card-frame"
        data-cardopen={openCalled}
      >
        <motion.div
          className="card"
          layout
          onLayoutAnimationComplete={handleCardLayout}
          animate={{
            borderRadius: !openCalled ? 25 : 0,
          }}
          initial={{
            borderRadius: !openCalled ? 25 : 0,
          }}
          // whileHover={
          //   !openCalled
          //     ? {
          //         scale: 1.05,
          //         boxShadow: "0 10px 20px rgba(0, 0, 0, .15)",
          //       }
          //     : {}
          // }
          transition={spring}
          onClick={handleOpenCalled}
        >
          <div data-cardopen={openCalled} className="card-content-frame">
            <div className="card-content">
              <motion.div
                layout
                transition={spring}
                data-cardopen={openCalled}
                className="img-place"
              >
                <Skeleton
                  style={
                    imageLoaded
                      ? { display: "none" }
                      : {
                          position: "absolute",
                          top: 0,
                          height: "100%",
                          width: "100%",
                        }
                  }
                />
                <motion.img
                  animate={{
                    opacity: !imageLoaded ? 0 : 1,
                  }}
                  transition={spring}
                  className="card-img"
                  src={src}
                  onLoad={handleImageLoaded}
                  alt="card-img"
                />
              </motion.div>
              <motion.div
                layout="position"
                transition={spring}
                className="main-text"
              >
                <Shiitake
                  className="title"
                  lines={!openCalled ? 2 : 5}
                  tagName="h3"
                >
                  They do, on the other hand, eat large numbers of rodents. They
                  can be found all across the world except for Australia,
                  Antarctica, and the neighbouring islands. They do, on the
                  other hand, eat large numbers of rodents. They can be found
                  all across the world except for Australia, Antarctica, and the
                  neighbouring islands.
                </Shiitake>
                <h3 className="price">1$</h3>
              </motion.div>
              {isOpen && (
                <motion.p
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="main-body"
                  transition={spring}
                >
                  <div className="button-container">
                    <motion.button
                      className="buy"
                      animate={{ scale: 1 }}
                      initial={{ scale: 0.7 }}
                      whileHover={{
                        scale: 1.2,
                      }}
                      onClick={() => {}}
                    >
                      <span>Buy</span>
                    </motion.button>
                    <motion.button
                      className="buy"
                      animate={{ scale: 1 }}
                      initial={{ scale: 0.7 }}
                      whileHover={{
                        scale: 1.2,
                      }}
                      transition={{ delay: 0.1 }}
                      onClick={() => {}}
                    >
                      <span>Add to cart</span>
                    </motion.button>
                  </div>
                  <span className="desc">{sampledesc}</span>
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 200,
  damping: 40,
  restSpeed: 1,
  restDelta: 1,
};

const sampledesc = `A weasel /ˈwiːzəl/ is a mammal of the genus Mustela of the
family Mustelidae. The genus Mustela includes the least
weasels, polecats, stoats, ferrets and mink. Members of this
genus are small, active predators, with long and slender
bodies and short legs. The family Mustelidae (which also
includes badgers, otters, and wolverines) is often referred to
as the "weasel family". In the UK, the term "weasel" usually
refers to the smallest species, the least weasel (M.
nivalis).[1] Weasels vary in length from 173 to 217 mm (6.8 to
8.5 in),[2] females being smaller than the males, and usually
have red or brown upper coats and white bellies; some
populations of some species moult to a wholly white coat in
winter. They have long, slender bodies, which enable them to
follow their prey into burrows. Their tails may be from 34 to
52 mm (1.3 to 2.0 in) long.[2] Weasels feed on small mammals
and have from time to time been considered vermin because some
species took poultry from farms or rabbits from commercial
warrens. They do, on the other hand, eat large numbers of
rodents. They can be found all across the world except for
Australia, Antarctica, and the neighbouring islands. A weasel
/ˈwiːzəl/ is a mammal of the genus Mustela of the family
Mustelidae. The genus Mustela includes the least weasels,
polecats, stoats, ferrets and mink. Members of this genus are
small, active predators, with long and slender bodies and
short legs. The family Mustelidae (which also includes
badgers, otters, and wolverines) is often referred to as the
"weasel family". In the UK, the term "weasel" usually refers
to the smallest species, the least weasel (M. nivalis).[1]
Weasels vary in length from 173 to 217 mm (6.8 to 8.5 in),[2]
females being smaller than the males, and usually have red or
brown upper coats and white bellies; some populations of some
species moult to a wholly white coat in winter. They have
long, slender bodies, which enable them to follow their prey
into burrows. Their tails may be from 34 to 52 mm (1.3 to 2.0
in) long.[2] Weasels feed on small mammals and have from time
to time been considered vermin because some species took
poultry from farms or rabbits from commercial warrens. They
do, on the other hand, eat large numbers of rodents. They can
be found all across the world except for Australia,
Antarctica, and the neighbouring islands. A weasel /ˈwiːzəl/
is a mammal of the genus Mustela of the family Mustelidae. The
genus Mustela includes the least weasels, polecats, stoats,
ferrets and mink. Members of this genus are small, active
predators, with long and slender bodies and short legs. The
family Mustelidae (which also includes badgers, otters, and
wolverines) is often referred to as the "weasel family". In
the UK, the term "weasel" usually refers to the smallest
species, the least weasel (M. nivalis).[1] Weasels vary in
length from 173 to 217 mm (6.8 to 8.5 in),[2] females being
smaller than the males, and usually have red or brown upper
coats and white bellies; some populations of some species
moult to a wholly white coat in winter. They have long,
slender bodies, which enable them to follow their prey into
burrows. Their tails may be from 34 to 52 mm (1.3 to 2.0 in)
long.[2] Weasels feed on small mammals and have from time to
time been considered vermin because some species took poultry
from farms or rabbits from commercial warrens. They do, on the
other hand, eat large numbers of rodents. They can be found
all across the world except for Australia, Antarctica, and the
neighbouring islands.`;
