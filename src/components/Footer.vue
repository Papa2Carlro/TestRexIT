<template>
    <footer class="footer">
        <div class="container">
            <ul class="footer__content">
                <li class="footer__content-col">
                    <img src="../assets/soc/phone.svg" alt="" class="footer__icon">

                    <div class="footer__info">
                        <div class="footer__title">phone</div>

                        <ul class="footer__info-list">
                            <li class="footer__info-item">+43 ( 987 ) 345 - 6782</li>
                        </ul>
                    </div>
                </li>

                <li class="footer__content-col">
                    <img src="../assets/soc/location.svg" alt="" class="footer__icon">

                    <div class="footer__info">
                        <div class="footer__title">Address</div>

                        <ul class="footer__info-list">
                            <li class="footer__info-item">Cracker Inc.</li>
                            <li class="footer__info-item">10 Cloverfield Lane</li>
                            <li class="footer__info-item">Berlin, IL 10928</li>
                            <li class="footer__info-item">Germany</li>
                        </ul>
                    </div>
                </li>

                <li class="footer__content-col">
                    <img src="../assets/soc/share.svg" alt="" class="footer__icon">

                    <div class="footer__info">
                        <div class="footer__title">Share us</div>

                        <ul class="footer__soc">
                            <li class="footer__soc-item">
                                <div class="footer__soc-icon">
                                    <img src="../assets/soc/pinterest.svg" alt="">
                                </div>

                                <div class="footer__soc-text">https://www.pinterest.com/</div>
                            </li>
                            <li class="footer__soc-item">
                                <div class="footer__soc-icon">
                                    <img src="../assets/soc/google.svg" alt="">
                                </div>

                                <div class="footer__soc-text">https://www.google.com/</div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>

        <img src="../assets/bg/footer.jpg" alt="" class="footer__bg">
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>