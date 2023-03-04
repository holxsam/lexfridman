export type ResearchItem = {
  imageUrl: string;
  paperUrl: string;
  videoUrl: string;
  websiteUrl: string;
  googleScholarUrl: string;
  cite: string;
  title: string;
  summary: string;
};

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    title: "DeepTraffic",
    summary:
      "Traffic simulation and optimization with deep reinforcement learning. Primary goal is to make the hands-on study of deep RL accessible to thousands of students, educators, and researchers.",
    imageUrl:
      "https://lexfridman.com/files/thumbs_pubs/2018_deeptraffic_driving_fast_through_dense_traffic.png",
    paperUrl: "https://arxiv.org/pdf/1801.02805.pdf",
    videoUrl: "",
    websiteUrl: "",
    googleScholarUrl:
      "https://scholar.google.com/scholar?q=%22DeepTraffic%3A+Crowdsourced+Hyperparameter+Tuning+of+Deep+Reinforcement+Learning+Systems+for+Multi-Agent+Dense+Traffic+Navigation%22",
    cite: `@inproceedings{fridman2018deeptraffic,
author = {Lex Fridman and Jack Terwilliger and Benedikt Jenik},
title = {DeepTraffic: Crowdsourced Hyperparameter Tuning of Deep Reinforcement Learning Systems for Multi-Agent Dense Traffic Navigation},
booktitle = {Neural Information Processing Systems (NIPS 2018) Deep Reinforcement Learning Workshop}
year = {2018},
url = {http://arxiv.org/abs/1801.02805},
doi = {10.5281/zenodo.2530457}
archivePrefix = {arXiv},
}`,
  },
  {
    title:
      "Automated Synchronization of Driving Data Using Vibration and Steering Events",
    summary:
      "A method for automated synchronization of vehicle sensors using accelerometer, telemetry, audio, and dense optical flow from three video sensors.",
    imageUrl:
      "https://lexfridman.com/files/thumbs_pubs/2016_automated_synchronization_of_driving_data_using.png",
    paperUrl: "https://arxiv.org/pdf/1510.06113.pdf",
    videoUrl:
      "https://www.youtube.com/watch?v=a96PO823veM&list=PLrAXtmErZgOfvrgXrKgzAFbqAW-lCG0Fv",
    websiteUrl: "",
    googleScholarUrl:
      "https://scholar.google.com/scholar?q=%22Automated+Synchronization+of+Driving+Data+Using+Vibration+and+Steering+Events%22",
    cite: `@article{fridman2016automated,
  title={Automated synchronization of driving data using vibration and steering events},
  author={Fridman, Lex and Brown, Daniel E and Angell, William and Abdi{'c}, Irman and Reimer, Bryan and Noh, Hae Young},
  journal={Pattern Recognition Letters},
  volume={75},
  pages={9--15},
  year={2016},
  publisher={Elsevier}
}`,
  },
  {
    title: "Arguing Machines: Human Supervision of Black Box AI Systems",
    summary:
      "Framework for providing human supervision of a black box AI system that makes life-critical decisions. We demonstrate this approach on two applications: (1) image classification and (2) real-world data of AI-assisted steering in Tesla vehicles.",
    imageUrl:
      "https://lexfridman.com/files/thumbs_pubs/2018_arguing_machines_human_supervision_of_black_box.png",
    paperUrl: "https://arxiv.org/pdf/1710.04459.pdf",
    videoUrl:
      "https://www.youtube.com/watch?v=YBvcKtLKNAw&list=PLrAXtmErZgOfvrgXrKgzAFbqAW-lCG0Fv",
    websiteUrl: "",
    googleScholarUrl:
      "https://scholar.google.com/scholar?q=%22Arguing+Machines%3A+Human+Supervision+of+Black+Box+AI+Systems+That+Make+Life-Critical+Decisions%22",
    cite: `@article{fridman2018arguing,
  author = {Lex Fridman and Li Ding and Benedikt Jenik and Bryan Reimer},
  title = {Arguing Machines: Human Supervision of Black Box AI Systems That Make Life-Critical Decisions},
  journal = {CoRR},
  volume = {abs/1710.04459},
  year = {2019},
  url = {http://arxiv.org/abs/1710.04459},
  archivePrefix = {arXiv},
  eprint = {1710.04459}
}`,
  },
  {
    title: "Crowdsourced Assessment of External Vehicle-to-Pedestrian Displays",
    summary:
      "30 external vehicle-to-pedestrian display concepts for autonomous vehicles were evaluated. Simple, minimalist displays performed best.",
    imageUrl:
      "https://lexfridman.com/files/thumbs_pubs/2019_ehmi_crowdsourced_assessment_of_external_vehicle_displays.png",
    paperUrl: "https://arxiv.org/pdf/1707.02698.pdf",
    videoUrl: "",
    websiteUrl: "",
    googleScholarUrl:
      "https://scholar.google.com/scholar?q=%22To+Walk+or+Not+to+Walk%3A+Crowdsourced+Assessment+of+External+Vehicle-to-Pedestrian+Displays%22",
    cite: `@inproceedings{fridman2019walk,
   author={Fridman, Lex and Mehler, Bruce and Xia, Lei and Yang, Yangyang and Facusse, Laura Yvonne and Reimer, Bryan},
   year={2019},
   title={To Walk or Not to Walk: Crowdsourced Assessment of External Vehicle-to-Pedestrian Displays},
   booktitle={Proceedings of The Transportation Research Board 98th Annual Meeting},
   address={Washington, DC}
}`,
  },
  {
    title: "MIT Advanced Vehicle Technology Study",
    summary:
      "Large-scale real-world AI-assisted driving data collection study to understand how human-AI interaction in driving can be safe and enjoyable. The emphasis is on computer vision based analysis of driver behavior in the context of automation use.",
    imageUrl:
      "https://lexfridman.com/files/thumbs_pubs/2018_mit_autonomous_vehicle_technology_study_large_scale.png",
    paperUrl: "https://arxiv.org/pdf/1711.06976.pdf",
    videoUrl:
      "https://www.youtube.com/watch?v=bzn7YEvoUaU&list=PLrAXtmErZgOfvrgXrKgzAFbqAW-lCG0Fv",
    websiteUrl: "https://lexfridman.com/avt/",
    googleScholarUrl:
      "https://scholar.google.com/scholar?q=%22MIT+Advanced+Vehicle+Technology+Study%3A+Large-Scale+Naturalistic+Driving+Study+of+Driver+Behavior+and+Interaction+With+Automation%22",
    cite: `@article{fridman2019avt,
author = {Lex Fridman, Daniel E. Brown, Michael Glazer, William Angell, Spencer Dodd, Benedikt Jenik, Jack Terwilliger, Aleksandr Patsekin, Julia Kindelsberger, Li Ding, Sean Seaman, Alea Mehler, Andrew Sipperley, Anthony Pettinato, Bobbie Seppelt, Linda Angell, Bruce Mehler, Bryan Reimer},
title =  {MIT Advanced Vehicle Technology Study: Large-Scale Naturalistic Driving Study of Driver Behavior and Interaction With Automation},
journal={IEEE Access}, 
year={2019}, 
volume={7}, 
number={}, 
pages={102021-102038}, 
doi={10.1109/ACCESS.2019.2926040}, 
ISSN={2169-3536}, 
month={},
}`,
  },
  {
    title: "What Can Be Predicted from 6 Seconds of Driver Glances?",
    summary:
      "Winner of the CHI 2017 Best Paper Award. We consider a dataset of real-world, on-road driving to explore the predictive power of driver glances.",
    imageUrl:
      "https://lexfridman.com/files/thumbs_pubs/2017_what_can_be_predicted_from_6_seconds_of_driver_glances.png",
    paperUrl: "https://arxiv.org/pdf/1611.08754.pdf",
    videoUrl: "",
    websiteUrl: "",
    googleScholarUrl:
      "https://scholar.google.com/scholar?q=%22What+Can+Be+Predicted+from+6+Seconds+of+Driver+Glances%3F%22",
    cite: `@inproceedings{fridman2017can,
  title={What Can Be Predicted from Six Seconds of Driver Glances?},
  author={Fridman, Lex and Toyoda, Heishiro and Seaman, Sean and Seppelt, Bobbie and Angell, Linda and Lee, Joonbum and Mehler, Bruce and Reimer, Bryan},
  booktitle={Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems},
  pages={2805--2813},
  year={2017},
  organization={ACM}
}`,
  },
  {
    title: "Driver Gaze Region Estimation without Use of Eye Movement",
    summary:
      "We propose a simplification of the general gaze estimation task by framing it as a gaze region estimation task in the driving context, thereby making it amenable to machine learning approaches. We go on to describe and evaluate one such learning-based approach.",
    imageUrl:
      "https://lexfridman.com/files/thumbs_pubs/2016_driver_gaze_region_estimation_without_use_of_eye.png",
    paperUrl: "https://arxiv.org/pdf/1507.04760.pdf",
    videoUrl:
      "https://www.youtube.com/watch?v=ShxbqjnsB8c&list=PLrAXtmErZgOfvrgXrKgzAFbqAW-lCG0Fv",
    websiteUrl: "",
    googleScholarUrl:
      "https://scholar.google.com/scholar?q=%22Driver+Gaze+Region+Estimation+without+Use+of+Eye+Movement%22",
    cite: `@article{fridman2016driver,
  title={Driver Gaze Region Estimation without Use of Eye Movement},
  author={Fridman, Lex and Langhans, Philipp and Lee, Joonbum and Reimer, Bryan},
  journal={IEEE Intelligent Systems},
  volume={31},
  number={3},
  pages={49--56},
  year={2016},
  publisher={IEEE}
}`,
  },
  {
    title: "Active Authentication on Mobile Devices",
    summary:
      "An approach for verifying the identity of a smartphone user with with four biometric modalities. We evaluate the approach by collecting real-world behavioral biometrics data from smartphones of 200 subjects over a period of at least 30 days.",
    imageUrl:
      "https://lexfridman.com/files/thumbs_pubs/2015_active_authentication_on_mobile_devices_via_stylometry.png",
    paperUrl: "https://arxiv.org/pdf/1503.08479.pdf",
    videoUrl: "",
    websiteUrl: "",
    googleScholarUrl:
      "https://scholar.google.com/scholar?q=%22Active+Authentication+on+Mobile+Devices+via+Stylometry%2C+Application+Usage%2C+Web+Browsing%2C+and+GPS+Location%22",
    cite: `@article{fridman2016active,
  title={Active authentication on mobile devices via stylometry, application usage, web browsing, and GPS location},
  author={Fridman, Lex and Weber, Steven and Greenstadt, Rachel and Kam, Moshe},
  journal={IEEE Systems Journal},
  year={2016},
  publisher={IEEE}
}`,
  },
  {
    title: "Cognitive Load Estimation in the Wild",
    summary:
      "Winner of the CHI 2018 Honorable Mention Award. We propose two novel vision-based methods for cognitive load estimation and evaluate them on a large-scale dataset collected under real-world driving conditions.",
    imageUrl:
      "https://lexfridman.com/files/thumbs_pubs/2018_cognitive_load_estimation_in_the_wild.png",
    paperUrl:
      "https://www.researchgate.net/profile/Lex_Fridman/publication/324658835_Cognitive_Load_Estimation_in_the_Wild/links/5bf0ba3092851c6b27c74bd1/Cognitive-Load-Estimation-in-the-Wild.pdf",
    videoUrl: "",
    websiteUrl: "",
    googleScholarUrl:
      "https://scholar.google.com/scholar?q=%22Cognitive+Load+Estimation+in+the+Wild%22",
    cite: `@inproceedings{fridman2018cognitive,
  title={Cognitive Load Estimation in the Wild},
  author={Fridman, Lex and Reimer, Bryan and Mehler, Bruce and Freeman, William T},
  booktitle={Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems},
  pages={652},
  year={2018},
  organization={ACM}
}`,
  },
  {
    title: "Human-Centered Autonomous Vehicle Systems",
    summary:
      "We propose a set of shared autonomy principles for designing and building autonomous vehicle systems in a human-centered way, and demonstrate these principles on a full-scale semi-autonomous vehicle.",
    imageUrl:
      "https://lexfridman.com/files/thumbs_pubs/2018_human_centered_autonomous_vehicle_systems_principles.png",
    paperUrl: "",
    videoUrl:
      "https://www.youtube.com/watch?v=OoC8oH0CLGc&list=PLrAXtmErZgOfvrgXrKgzAFbqAW-lCG0Fv",
    websiteUrl: "https://arxiv.org/pdf/1810.01835.pdf",
    googleScholarUrl:
      "https://scholar.google.com/scholar?q=%22Human-Centered+Autonomous+Vehicle+Systems%3A+Principles+of+Effective+Shared+Autonomy%22",
    cite: `@article{fridman2018humancentered,
author = {Lex Fridman},
title =  {Human-Centered Autonomous Vehicle Systems: Principles of Effective Shared Autonomy},
journal = {CoRR},
volume =  {abs/1810.01835},
year =    {2018},
url =     {https://arxiv.org/abs/1810.01835},
archivePrefix = {arXiv},
eprint =  {1810.01835}
}`,
  },
];
