---
home: true
title: Ana Sayfa
detail: Yusuf Karakaya - Blog
heroText: YK Blog
tagline: Yusuf Karakaya
actionText: İletişim →
actionLink: /pages/iletisim
date: 2020-03-12
meta:
  - name: description
    content: Yusuf Karakaya kişisel blog.
  - name: keywords
    content: Yusuf Karakaya, blog
features:
- title: Blog Yazıları
  details: Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
- title: Lorem İpsum
  details: Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
- title: VuePress Nedir?
  details: VuePress Markdown kullanarak statik siteler oluşturmaya yarayan Vue tabanlı NodeJS kütüphanesidir. VuePress ile oluşturulan her sayfanın bir HTML sayfası oluşur, oluşan HTML sayfaları SEO uyumludur ve yüksek performansa sahiptir.
footer: Copyright © 2020
---
<!-- $page -->
<!-- $site -->

## Sayfalar
<ul>
  <li v-for="item in $site.pages">
    <a v-bind:href="item.path">
    	<span v-if="item.title == 'Home' ">Ana Sayfa </span>
    	<span v-else>{{ item.title }}</span>
    </a>
  </li>
</ul>

***

Yayınlanan Blog Yazısı : {{ $site.pages.length -3 }}
