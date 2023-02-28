<?php
/* 
    TEMPLATE NAME: Sample page
*/
    get_header();

    the_post();

    get_template_part('/components/samplePage/text'); 

    get_footer(); 

?>