import {Component} from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.css'],
  providers: [NgbCarouselConfig]
})
export class CardSelectionComponent {

  imageObject: Array<object> = [
    {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/f/fs_s77/FS_S77_E003.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/f/fs_s77/FS_S77_E003.png',
      alt: 'Fate/stay night',
    }, {
      image: 'https://ws-tcg.com/wordpress/wp-content/images/cardlist/s/sw_s49/sw_s49_077.png',
      thumbImage: 'https://ws-tcg.com/wordpress/wp-content/images/cardlist/s/sw_s49/sw_s49_077.png',
      alt: 'Star Wars'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/DDM/DDM_S88_E007.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/DDM/DDM_S88_E007.png',
      alt: 'Dungeon ni Deai o Motomeru no wa Machigatteiru Darō ka'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/SAOA2/SAO_S80_E077.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/SAOA2/SAO_S80_E077.png',
      alt: 'Sword Art Online'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/r/rz_se35/RZ_SE35_E04.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/r/rz_se35/RZ_SE35_E04.png',
      alt: 'Re:Zero'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/o/ovl_s62/OVL_S62_E053.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/o/ovl_s62/OVL_S62_E053.png',
      alt: 'Overlord',
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/uploads/20210519181156/DAL_W79_E003_SAMPLE.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/uploads/20210519181156/DAL_W79_E003_SAMPLE.png',
      alt: 'Date A Live'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/uploads/20210519181153/AT_WX02_T09S_SAMPLE.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/uploads/20210519181153/AT_WX02_T09S_SAMPLE.png',
      alt: 'Adventure Time'
    }, {
      image: 'https://ws-tcg.com/wordpress/wp-content/images/cardlist/c/cs_s28/cs_s28_012.png',
      thumbImage: 'https://ws-tcg.com/wordpress/wp-content/images/cardlist/c/cs_s28/cs_s28_012.png',
      alt: 'Crayon Shin-chan'
    }, {
      image: 'https://ws-tcg.com/wordpress/wp-content/images/cardlist/e/ev_s12/ev_s12_062.png',
      thumbImage: 'https://ws-tcg.com/wordpress/wp-content/images/cardlist/e/ev_s12/ev_s12_062.png',
      alt: 'Neon Genesis Evangelion'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/FGO6/S87_E082.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/FGO6/S87_E082.png',
      alt: 'Fate/Grand Order'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/TRV/TRV_BCS2022_01PR.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/TRV/TRV_BCS2022_01PR.png',
      alt: 'Tokyo Revengers'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/MTI/BP/MTI_S83_E087S.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/MTI/BP/MTI_S83_E087S.png',
      alt: 'Mushoku Tensei: Isekai Ittara Honki Dasu'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/TSK2/TSK_S82_E001S.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/TSK2/TSK_S82_E001S.png',
      alt: 'Tensei Shitara Slime Datta Ken'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/s/sds_sx03/SDS_SX03_001.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/s/sds_sx03/SDS_SX03_001.png',
      alt: 'Nanatsu no Taizai'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/k/kgl_s79/KGL_S79_E050.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/k/kgl_s79/KGL_S79_E050.png',
      alt: 'Kaguya-sama: Love Is War'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/b/bfr_s78/BFR_S78_E001.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/b/bfr_s78/BFR_S78_E001.png',
      alt: 'Bofuri: Itai no wa Iya nano de Bōgyoryoku ni Kyokufuri Shitai to Omoimasu.'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/MOB/MOB_SX02_T16.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/MOB/MOB_SX02_T16.png',
      alt: 'Mob Psycho 100'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/j/jj_s66/JJ_S66_PE04.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/j/jj_s66/JJ_S66_PE04.png',
      alt: 'JoJo\'s Bizarre Adventure'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/g/gbs_s63/GBS_S63_E030.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/g/gbs_s63/GBS_S63_E030.png',
      alt: 'Goblin Slayer'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/b/bnj_sx01/BNJ_SX01_066.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/b/bnj_sx01/BNJ_SX01_066.png',
      alt: 'Batman Ninja'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/r/rsl_s56/RSL_S56_E002.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/r/rsl_s56/RSL_S56_E002.png',
      alt: 'Revue Starlight'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/n/ngl_s58/NGL_S58_E001.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/n/ngl_s58/NGL_S58_E001.png',
      alt: 'No Game No Life'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/k/kc_s42/KC_S42_E002.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/k/kc_s42/KC_S42_E002.png',
      alt: 'Kantai Collection'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/a/apo_s53/APO_S53_E065SR.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/a/apo_s53/APO_S53_E065SR.png',
      alt: 'Fate/Apocrypha'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/g/gl_s52/GL_S52_E002.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/g/gl_s52/GL_S52_E002.png',
      alt: 'Tengen Toppa Gurren-Lagann'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/p/p5_s45/P5_S45_E001.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/p/p5_s45/P5_S45_E001.png',
      alt: 'Persona 5'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/a/aw_s43/AW_S43_E002.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/a/aw_s43/AW_S43_E002.png',
      alt: 'Accel World'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/a/aot_s35/AOT_S35_E003R.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/a/aot_s35/AOT_S35_E003R.png',
      alt: 'Shingeki no Kyojin'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/d/dg_en_s03/DG_EN_S03_E001.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/d/dg_en_s03/DG_EN_S03_E001.png',
      alt: 'Disgaea'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/n/nm_s24/NM_S24_E023.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/n/nm_s24/NM_S24_E023.png',
      alt: 'Monogatari Series'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/p/pd_s22/PD_S22_E031.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/p/pd_s22/PD_S22_E031.png',
      alt: 'Hatsune Miku: Project DIVA'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/p/p4_en_s01/P4_EN_S01_001.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/p/p4_en_s01/P4_EN_S01_001.png',
      alt: 'Persona 4'
    }, {
      image: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/k/klk_s27/KLK_S27_E041.png',
      thumbImage: 'https://en.ws-tcg.com/wp/wp-content/images/cardimages/k/klk_s27/KLK_S27_E041.png',
      alt: 'Kill la Kill'
    },

  ]

}
