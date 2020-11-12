import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import Shiitake from "shiitake";

export default function Card({ id, isSelected, title, price, image }) {
  // const [openCalled, setOpenCalled] = useState(false);

  const [isOpen, setOpen] = useState(false);
  const [zIndex, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // function cancel(event) {
  //   event.stopPropagation();
  //   event.nativeEvent.stopImmediatePropagation();
  // }

  function handleImageLoaded() {
    setImageLoaded(true);
  }

  function handleCardLayout() {
    if (!isSelected) {
      setOpen(false);
      setIndex(0);
    } else {
      setOpen(true);
    }
  }

  useEffect(() => {
    isSelected && (document.body.style.overflow = "hidden");
    isSelected && setIndex(2);
    !isSelected && (document.body.style.overflow = "unset");
  }, [isSelected]);

  return (
    <li className="card-place">
      <div
        style={{ zIndex: zIndex }}
        className="card-frame"
        data-cardopen={isSelected}
      >
        <motion.div
          className="card"
          layout
          onLayoutAnimationComplete={handleCardLayout}
          animate={{
            borderRadius: !isSelected ? 25 : 0,
          }}
          initial={{
            borderRadius: !isSelected ? 25 : 0,
          }}
          transition={spring}
          // onClick={handleOpenCalled}
        >
          <div data-cardopen={isSelected} className="card-content-frame">
            <div className="card-content">
              <motion.div
                // animate={{ borderRadius: !openCalled ? 0 : 25 }}
                layout="position"
                transition={spring}
                data-cardopen={isSelected}
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
                  src={image}
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
                  lines={!isSelected ? 2 : 3}
                  tagName="h3"
                >
                  {title}
                </Shiitake>
                <div className="main-price">
                  <h3 className="price">{price}$</h3>
                  {/* <motion.button
                    layout="position"
                    className="buy"
                    transition={spring}
                    onClick={cancel}
                  >
                    <span>Add</span>
                  </motion.button> */}
                </div>
              </motion.div>
              {isOpen && (
                <motion.p
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="main-body"
                  transition={spring}
                >
                  <span className="desc">{sampledesc}</span>
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      {!isSelected && (
        <Link to={`/products/${id}`} className={`card-open-link`} />
      )}
    </li>
  );
}

const spring = {
  type: "spring",
  stiffness: 200,
  damping: 40,
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
