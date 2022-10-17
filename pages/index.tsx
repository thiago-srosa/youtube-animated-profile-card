import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import scarlet_witch_avatar from "../assets/scarlet_witch_avatar.jpg";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.lines} />
        <div className={styles.imgContainer}>
          <div className={styles.img}>
            <Image src={scarlet_witch_avatar} alt="" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.details}>
            <h2 className={styles.card_name}>Wanda Maximoff</h2>
            <span className={styles.card_job_description}>Scarlet witch</span>
            <div className={styles.data}>
              <div>
                <h3 className={styles.data_number}>324</h3>
                <span className={styles.data_title}>Posts</span>
              </div>

              <div>
                <h3 className={styles.data_number}>120k</h3>
                <span className={styles.data_title}>Followers</span>
              </div>

              <div>
                <h3 className={styles.data_number}>285</h3>
                <span className={styles.data_title}>Following</span>
              </div>
            </div>
            <div className={styles.buttonsContainer}>
              <button>Follow</button>
              <button>Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
