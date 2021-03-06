<script type="text/javascript">
    function initialize_<?php echo esc_js($gmap_name) ?>() {
        var centerLatlng = new google.maps.LatLng(<?php echo esc_js($this->latitude()) ?>,<?php echo esc_js($this->longitude()) ?>);
        var mapSettings = {
            zoom: <?php echo esc_js($this->zoom()) ?>,
            center: centerLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            streetViewControl: false,
            panControl: false,
            mapTypeControl: <?php echo $this->type_menu() ? 'true' : 'false' ?>,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                position: google.maps.ControlPosition.<?php echo esc_js($this->type_menu_position()) ?>},
            zoomControl: <?php echo $this->zoom_button() ? 'true' : 'false' ?>,
            zoomControlOptions: {
                position: google.maps.ControlPosition.<?php echo esc_js($this->zoom_button_position()) ?>}
        };
        var <?php echo esc_js($gmap_name) ?> =
        new google.maps.Map(document.getElementById("<?php echo esc_js($gmap_name) ?>"), mapSettings);

        // pin clustering options
        <?php
        if( $this->pin_clustering()){
        ?>
        var clusterMarkers = [];
        var cmStyles = [{
            url: '<?php echo esc_js($marker_logo_list[$this->clustering_marker_logo_id_small()]->url()) ?>',
            width: <?php echo esc_js($marker_logo_list[$this->clustering_marker_logo_id_small()]->width()) ?>,
            height: <?php echo esc_js($marker_logo_list[$this->clustering_marker_logo_id_small()]->height()) ?>,
            textColor: '<?php echo esc_js($this->clustering_text_color()) ?>',
            textSize: <?php echo esc_js($this->clustering_text_size_small()) ?>,
            anchor: [<?php echo esc_js($this->clustering_text_align_y_small()) ?>, <?php echo esc_js($this->clustering_text_align_x_small()) ?>]
        }, {
            url: '<?php echo esc_js($marker_logo_list[$this->clustering_marker_logo_id_medium()]->url()) ?>',
            width: <?php echo esc_js($marker_logo_list[$this->clustering_marker_logo_id_medium()]->width()) ?>,
            height: <?php echo esc_js($marker_logo_list[$this->clustering_marker_logo_id_medium()]->height()) ?>,
            textColor: '<?php echo esc_js($this->clustering_text_color()) ?>',
            textSize: <?php echo esc_js($this->clustering_text_size_medium()) ?>,
            anchor: [<?php echo esc_js($this->clustering_text_align_y_medium()) ?>, <?php echo esc_js($this->clustering_text_align_x_medium()) ?>]
        }, {
            url: '<?php echo esc_js($marker_logo_list[$this->clustering_marker_logo_id_big()]->url()) ?>',
            width: <?php echo esc_js($marker_logo_list[$this->clustering_marker_logo_id_big()]->width()) ?>,
            height: <?php echo esc_js($marker_logo_list[$this->clustering_marker_logo_id_big()]->height()) ?>,
            textColor: '<?php echo esc_js($this->clustering_text_color()) ?>',
            textSize: <?php echo esc_js($this->clustering_text_size_big()) ?>,
            anchor: [<?php echo esc_js($this->clustering_text_align_y_big()) ?>, <?php echo esc_js($this->clustering_text_align_x_big()) ?>]
        }];
        var mcOptions = {gridSize: <?php echo esc_js( $this->clustering_grid_size() ) ?>, styles: cmStyles};

        var everythingElse = [
            { lat: -90, lng: -180 },
            { lat: 90, lng: -180 },
            { lat: 90, lng: 180 },
            { lat: -90, lng: 180 },
            { lat: -90, lng: 0 }
        ];

        // overlay
        var outlineCoordinates = [
            { lng: -91.7303661652997, lat: 43.4995717605756 },
            { lng: -91.6110989749481, lat: 43.5006261853338 },
            { lng: -91.2235667796587, lat: 43.5008086595185 },
            { lng: -91.2405580213774, lat: 43.5487125887566 },
            { lng: -91.2329899044204, lat: 43.5988900700786 },
            { lng: -91.258389189352,  lat: 43.6773222933277 },
            { lng: -91.2589159418758, lat: 43.722395792303  },
            { lng: -91.2511048926494, lat: 43.7880757984421 },
            { lng: -91.2919479787799, lat: 43.8471907610578 },
            { lng: -91.3733573044066, lat: 43.9471911008781 },
            { lng: -91.425901818194,  lat: 43.9856198570706 },
            { lng: -91.5284201557391, lat: 44.0342152895652 },
            { lng: -91.5691620630017, lat: 44.0349552968239 },
            { lng: -91.6017862700781, lat: 44.0408222716716 },
            { lng: -91.6522336068049, lat: 44.0668957468858 },
            { lng: -91.7532193228097, lat: 44.137227713274  },
            { lng: -91.8487439445729, lat: 44.1911872320563 },
            { lng: -91.8886943206616, lat: 44.2574949606432 },
            { lng: -91.9223493716377, lat: 44.2883410303644 },
            { lng: -91.9227541233788, lat: 44.3175199116197 },
            { lng: -91.9388683450487, lat: 44.339111391384  },
            { lng: -91.9723859734527, lat: 44.3644872200889 },
            { lng: -92.0913333998139, lat: 44.4155898138742 },
            { lng: -92.2061374354761, lat: 44.438394406506  },
            { lng: -92.2491003601042, lat: 44.4562167874695 },
            { lng: -92.2966874837295, lat: 44.4921818837451 },
            { lng: -92.3204780087543, lat: 44.5404910618561 },
            { lng: -92.3408725165741, lat: 44.552835394321  },
            { lng: -92.5092148595268, lat: 44.5751591745776 },
            { lng: -92.6089736337232, lat: 44.6102923158697 },
            { lng: -92.6303675936169, lat: 44.6426524073846 },
            { lng: -92.7371456955245, lat: 44.7135944805029 },
            { lng: -92.8055846707726, lat: 44.7461605361291 },
            { lng: -92.7610280602863, lat: 44.8353710549111 },
            { lng: -92.7642634372038, lat: 44.8622340952332 },
            { lng: -92.7718708151913, lat: 44.8994959546817 },
            { lng: -92.7539257938533, lat: 44.9150027795129 },
            { lng: -92.7497678430831, lat: 44.9356555439475 },
            { lng: -92.767126457669,  lat: 45.0010049050117 },
            { lng: -92.7629915622041, lat: 45.0221192057595 },
            { lng: -92.7967618135124, lat: 45.0656102708574 },
            { lng: -92.745422213769,  lat: 45.1130040157029 },
            { lng: -92.7449348452892, lat: 45.1564226976764 },
            { lng: -92.7625830453591, lat: 45.1866121435376 },
            { lng: -92.7554192919425, lat: 45.2123764810656 },
            { lng: -92.7465933709999, lat: 45.2976031328022 },
            { lng: -92.7073843995039, lat: 45.3182016620431 },
            { lng: -92.6848697682278, lat: 45.3630764817203 },
            { lng: -92.6487510358123, lat: 45.3954659291152 },
            { lng: -92.6449750709781, lat: 45.4394520895191 },
            { lng: -92.6548177462347, lat: 45.4552217732121 },
            { lng: -92.6854210050266, lat: 45.470053305923  },
            { lng: -92.7281546763928, lat: 45.5472423195578 },
            { lng: -92.7621749006385, lat: 45.5642634927727 },
            { lng: -92.8350370161896, lat: 45.5634021889124 },
            { lng: -92.8768312053709, lat: 45.5788365687146 },
            { lng: -92.8853973666776, lat: 45.6449553564473 },
            { lng: -92.8600197303491, lat: 45.7105625427853 },
            { lng: -92.8336362361192, lat: 45.7308902363902 },
            { lng: -92.7791069996475, lat: 45.7633404333685 },
            { lng: -92.7487619268784, lat: 45.8373020678585 },
            { lng: -92.7340976634746, lat: 45.8449807095829 },
            { lng: -92.7062407667141, lat: 45.8909581511523 },
            { lng: -92.6662078822659, lat: 45.9157031282064 },
            { lng: -92.5526720844383, lat: 45.951269177817  },
            { lng: -92.523976865602,  lat: 45.9825831928093 },
            { lng: -92.4623457577218, lat: 45.9811975360765 },
            { lng: -92.424999275654,  lat: 46.0255041004608 },
            { lng: -92.3649627980664, lat: 46.0162488119767 },
            { lng: -92.3462248301446, lat: 46.0225961162004 },
            { lng: -92.3273726656403, lat: 46.0568782051512 },
            { lng: -92.2893704026368, lat: 46.0732311286316 },
            { lng: -92.2889439643788, lat: 46.1566006735494 },
            { lng: -92.2886852608925, lat: 46.4159840674228 },
            { lng: -92.2872715563534, lat: 46.6587860038615 },
            { lng: -92.3031480663,    lat: 46.6665757766645 },
            { lng: -92.2146242678823, lat: 46.6682038862087 },
            { lng: -92.088492023079,  lat: 46.7918972785432 },
            { lng: -91.8009688624982, lat: 46.927086623484  },
            { lng: -91.4686571836076, lat: 47.1249355556153 },
            { lng: -91.0214756530082, lat: 47.4610588390706 },
            { lng: -90.5096334545288, lat: 47.7099379965097 },
            { lng: -89.9996777736217, lat: 47.8245648226691 },
            { lng: -89.6363736107452, lat: 47.9593906700956 },
            { lng: -89.6256450556299, lat: 47.9925618003996 },
            { lng: -89.5306731359836, lat: 48.0016559923925 },
            { lng: -89.7493099330168, lat: 48.0264846412458 },
            { lng: -89.9003891418888, lat: 47.9925051206716 },
            { lng: -89.9870207360302, lat: 48.0235567657025 },
            { lng: -90.0267005742131, lat: 48.0860790014952 },
            { lng: -90.1452700207968, lat: 48.1127708502089 },
            { lng: -90.5568351655885, lat: 48.0927504182125 },
            { lng: -90.5674552658806, lat: 48.1216998440229 },
            { lng: -90.7433655871238, lat: 48.0884437151537 },
            { lng: -90.8644947891665, lat: 48.2541980952133 },
            { lng: -91.0271484393144, lat: 48.1953389259894 },
            { lng: -91.2394466747146, lat: 48.0812981350086 },
            { lng: -91.5715618830894, lat: 48.0435715472354 },
            { lng: -91.5687753292567, lat: 48.1044577516695 },
            { lng: -91.7037310650447, lat: 48.1148349055472 },
            { lng: -91.7119378461929, lat: 48.196775109185  },
            { lng: -91.7888148497142, lat: 48.2061452044721 },
            { lng: -91.9795339629396, lat: 48.2503981435702 },
            { lng: -92.0351836630443, lat: 48.3555087869416 },
            { lng: -92.1259621061321, lat: 48.3667559539545 },
            { lng: -92.276130881027,  lat: 48.3523196851575 },
            { lng: -92.3002722840632, lat: 48.2983114429892 },
            { lng: -92.2769179571142, lat: 48.244340869065  },
            { lng: -92.3701160227512, lat: 48.2207790471373 },
            { lng: -92.4733222786803, lat: 48.357498964433  },
            { lng: -92.456344912887,  lat: 48.4021690787394 },
            { lng: -92.497529244791,  lat: 48.4400727712848 },
            { lng: -92.7066429969655, lat: 48.4603699594979 },
            { lng: -92.698821186614,  lat: 48.4947209620297 },
            { lng: -92.6263799413386, lat: 48.5028239458538 },
            { lng: -92.6418199154193, lat: 48.5403493271395 },
            { lng: -92.7290006435522, lat: 48.5402115541602 },
            { lng: -92.9469262402041, lat: 48.6283554983948 },
            { lng: -93.0914423831067, lat: 48.6265848629951 },
            { lng: -93.3042367633035, lat: 48.6371629986434 },
            { lng: -93.4577694856222, lat: 48.5927099128974 },
            { lng: -93.4653394453286, lat: 48.5495199345034 },
            { lng: -93.5141391057052, lat: 48.5342709597703 },
            { lng: -93.7811059808909, lat: 48.511590153422  },
            { lng: -93.8126854033933, lat: 48.5254079471682 },
            { lng: -93.8439037871322, lat: 48.6247369771822 },
            { lng: -94.2308273869122, lat: 48.6519875523433 },
            { lng: -94.2923368906057, lat: 48.707711135665  },
            { lng: -94.4306344734039, lat: 48.7107852810122 },
            { lng: -94.5703127368143, lat: 48.7136762635817 },
            { lng: -94.6944320224137, lat: 48.7776155300333 },
            { lng: -94.6812499456836, lat: 48.8771613109608 },
            { lng: -94.8320392613248, lat: 49.3308059165427 },
            { lng: -95.1518673347569, lat: 49.3717301437862 },
            { lng: -95.1577498893629, lat: 48.9999959148723 },
            { lng: -95.2766571152867, lat: 48.9999912122438 },
            { lng: -96.4069151843986, lat: 48.9999820713408 },
            { lng: -97.2294364438333, lat: 48.9999877567165 },
            { lng: -97.2163690958323, lat: 48.9318299182446 },
            { lng: -97.1757275173075, lat: 48.8737577873476 },
            { lng: -97.171204411799,  lat: 48.8359804803914 },
            { lng: -97.180421855856,  lat: 48.8155374993874 },
            { lng: -97.1647124057145, lat: 48.8103683029549 },
            { lng: -97.1739447012341, lat: 48.8015144641308 },
            { lng: -97.147516003008,  lat: 48.7811701058176 },
            { lng: -97.139245987437,  lat: 48.7635421115078 },
            { lng: -97.1478983886693, lat: 48.7556533929197 },
            { lng: -97.1325018005064, lat: 48.7472187900956 },
            { lng: -97.1348061613563, lat: 48.7262379306493 },
            { lng: -97.1101012816521, lat: 48.7085830451964 },
            { lng: -97.1167392665872, lat: 48.6952431183753 },
            { lng: -97.0971692767445, lat: 48.6745289135858 },
            { lng: -97.1076300563642, lat: 48.6299465820435 },
            { lng: -97.1274443455249, lat: 48.6297943394125 },
            { lng: -97.1229581756859, lat: 48.6207686596526 },
            { lng: -97.1447180746877, lat: 48.614024636853  },
            { lng: -97.1408119037381, lat: 48.586905806154  },
            { lng: -97.1581923011142, lat: 48.5836407260616 },
            { lng: -97.1521268011092, lat: 48.5728564381998 },
            { lng: -97.1679431505786, lat: 48.5622632793582 },
            { lng: -97.1466183723849, lat: 48.549537028086  },
            { lng: -97.1604356938229, lat: 48.5450778855401 },
            { lng: -97.1555375111,    lat: 48.5383982428954 },
            { lng: -97.13938559124,   lat: 48.5346480897377 },
            { lng: -97.1483276589694, lat: 48.5179512756552 },
            { lng: -97.1345943266034, lat: 48.5173139662426 },
            { lng: -97.1436129528287, lat: 48.4381095940115 },
            { lng: -97.1196331513721, lat: 48.4371020760904 },
            { lng: -97.1226011810987, lat: 48.4161098774117 },
            { lng: -97.1516469812462, lat: 48.4196122946538 },
            { lng: -97.1498235476997, lat: 48.4099916056847 },
            { lng: -97.1291245153039, lat: 48.4078855188887 },
            { lng: -97.1588188890655, lat: 48.3882060567347 },
            { lng: -97.1352054002438, lat: 48.3844100102639 },
            { lng: -97.1337863598383, lat: 48.3724547376235 },
            { lng: -97.1503959422882, lat: 48.3632158504957 },
            { lng: -97.1311236997639, lat: 48.3614912628834 },
            { lng: -97.1371359526577, lat: 48.325991839938  },
            { lng: -97.1125917805087, lat: 48.3199260418033 },
            { lng: -97.1326346023646, lat: 48.3109694998778 },
            { lng: -97.1147510385913, lat: 48.3036182701977 },
            { lng: -97.1137211077245, lat: 48.2948826063907 },
            { lng: -97.1305136858433, lat: 48.2930404066961 },
            { lng: -97.1126835485646, lat: 48.2861469425287 },
            { lng: -97.1117146532382, lat: 48.2778766724222 },
            { lng: -97.1366555811411, lat: 48.2644837251407 },
            { lng: -97.1237846407281, lat: 48.2591734472995 },
            { lng: -97.1275540577206, lat: 48.2335233812974 },
            { lng: -97.1092357553089, lat: 48.2280489212221 },
            { lng: -97.1397539172305, lat: 48.2217551769127 },
            { lng: -97.1108994630634, lat: 48.2076058326789 },
            { lng: -97.1308278329499, lat: 48.203741885664  },
            { lng: -97.1372749809682, lat: 48.1950635087416 },
            { lng: -97.1362912579062, lat: 48.1752269254696 },
            { lng: -97.1374434976966, lat: 48.1677691625112 },
            { lng: -97.1160657786151, lat: 48.1592237600938 },
            { lng: -97.1365131689498, lat: 48.1483979760568 },
            { lng: -97.1209185467255, lat: 48.1427747596289 },
            { lng: -97.1218728658484, lat: 48.1163692500537 },
            { lng: -97.0990303774014, lat: 48.1009725364666 },
            { lng: -97.0927214340796, lat: 48.0703439518727 },
            { lng: -97.0670713478673, lat: 48.048164548667  },
            { lng: -97.048053168361,  lat: 47.9549243203709 },
            { lng: -97.0153310859442, lat: 47.9178900732528 },
            { lng: -97.0205662446582, lat: 47.8755694579146 },
            { lng: -97.0003404808151, lat: 47.8701978669666 },
            { lng: -96.9772315863069, lat: 47.8280293802142 },
            { lng: -96.9838928361532, lat: 47.8096615237026 },
            { lng: -96.9578304353686, lat: 47.7944403501783 },
            { lng: -96.9320126704945, lat: 47.7635063343999 },
            { lng: -96.9236591919833, lat: 47.7140944463104 },
            { lng: -96.8894255747151, lat: 47.6739252332857 },
            { lng: -96.8733355306381, lat: 47.6152549421415 },
            { lng: -96.8522168516036, lat: 47.6011515774988 },
            { lng: -96.8586644874892, lat: 47.5629780191413 },
            { lng: -96.8491887237169, lat: 47.5445680596933 },
            { lng: -96.8606869753116, lat: 47.521355890617  },
            { lng: -96.8516156149426, lat: 47.5006189556105 },
            { lng: -96.8666840950429, lat: 47.4615376720173 },
            { lng: -96.8558270224376, lat: 47.4367532150799 },
            { lng: -96.8672485372544, lat: 47.4130870926383 },
            { lng: -96.8500055242737, lat: 47.4089361913463 },
            { lng: -96.8398275182521, lat: 47.3841173886799 },
            { lng: -96.8506310274787, lat: 47.3609547965118 },
            { lng: -96.8384617159414, lat: 47.3422432670699 },
            { lng: -96.8467474249113, lat: 47.3146021392787 },
            { lng: -96.8377139015022, lat: 47.2938841531782 },
            { lng: -96.8496236414402, lat: 47.2568437171683 },
            { lng: -96.8370653320765, lat: 47.240458862523  },
            { lng: -96.8264910530645, lat: 47.1700638561564 },
            { lng: -96.839163919183,  lat: 47.1518867244712 },
            { lng: -96.8191517739067, lat: 47.092603946145  },
            { lng: -96.8269645555187, lat: 47.0788327499143 },
            { lng: -96.8226082854226, lat: 47.0339323228784 },
            { lng: -96.8352964249003, lat: 47.010231336615  },
            { lng: -96.8245311005541, lat: 47.0034368148568 },
            { lng: -96.8167722571011, lat: 46.9697793204954 },
            { lng: -96.7934256963282, lat: 46.9696412657999 },
            { lng: -96.8018871168051, lat: 46.9558437462552 },
            { lng: -96.7897103913183, lat: 46.9482025284177 },
            { lng: -96.7879252958789, lat: 46.9321845446505 },
            { lng: -96.7630680116614, lat: 46.9362617243826 },
            { lng: -96.7569111193893, lat: 46.9227804067606 },
            { lng: -96.7780611563929, lat: 46.8673496223485 },
            { lng: -96.7682498142506, lat: 46.8448617179934 },
            { lng: -96.7971969856713, lat: 46.8120331273937 },
            { lng: -96.7803820602875, lat: 46.7623119235704 },
            { lng: -96.7815566712509, lat: 46.7070442482152 },
            { lng: -96.7936950250642, lat: 46.6788040267861 },
            { lng: -96.7902458463061, lat: 46.6297732310646 },
            { lng: -96.7843175742934, lat: 46.6241120798968 },
            { lng: -96.7710417660143, lat: 46.599983727298  },
            { lng: -96.7512275405111, lat: 46.5886193856906 },
            { lng: -96.7403159762507, lat: 46.4894326362161 },
            { lng: -96.7148938591495, lat: 46.4687184679509 },
            { lng: -96.709682617507,  lat: 46.4271682580565 },
            { lng: -96.688228026703,  lat: 46.4122182590646 },
            { lng: -96.652101616659,  lat: 46.359433744956  },
            { lng: -96.6148614718026, lat: 46.3508125122489 },
            { lng: -96.6020742477367, lat: 46.3363242033822 },
            { lng: -96.598183069183,  lat: 46.2386825873787 },
            { lng: -96.586456172813,  lat: 46.2154130412247 },
            { lng: -96.5878902984855, lat: 46.1919183501241 },
            { lng: -96.5711660882375, lat: 46.1771746587376 },
            { lng: -96.5519309951806, lat: 46.0955288981098 },
            { lng: -96.5762152647689, lat: 46.0212796299197 },
            { lng: -96.561802180143,  lat: 45.947683082204  },
            { lng: -96.5669215299379, lat: 45.9341104552974 },
            { lng: -96.5879553105857, lat: 45.8178543918252 },
            { lng: -96.6046107059596, lat: 45.8082642484528 },
            { lng: -96.6573917688784, lat: 45.7389705623089 },
            { lng: -96.8327958215581, lat: 45.6506868841235 },
            { lng: -96.8549898493374, lat: 45.6091221067738 },
            { lng: -96.8430871871886, lat: 45.5840902909474 },
            { lng: -96.7692462014101, lat: 45.5174788689806 },
            { lng: -96.738032334178,  lat: 45.4581952903635 },
            { lng: -96.6931692082715, lat: 45.4106381219312 },
            { lng: -96.605084508902,  lat: 45.3965244024214 },
            { lng: -96.5325489023943, lat: 45.375132161552  },
            { lng: -96.4775920650685, lat: 45.3285093657539 },
            { lng: -96.4576022451657, lat: 45.2988502415708 },
            { lng: -96.454496608233,  lat: 45.2751954302209 },
            { lng: -96.4560798249867, lat: 44.9719948297018 },
            { lng: -96.45521726388,   lat: 44.801347584114  },
            { lng: -96.4567178119828, lat: 44.6288086832266 },
            { lng: -96.4551061874746, lat: 44.5383431654349 },
            { lng: -96.4573975061948, lat: 44.1990613946085 },
            { lng: -96.456602339442,  lat: 43.8487418284865 },
            { lng: -96.4604547078315, lat: 43.4997184756898 },
            { lng: -96.0610395014389, lat: 43.498533697461  },
            { lng: -95.8669120002192, lat: 43.4989439769817 },
            { lng: -95.4647753585947, lat: 43.4995410217166 },
            { lng: -95.3965585901372, lat: 43.5003340364673 },
            { lng: -94.9204646838526, lat: 43.4993712448179 },
            { lng: -94.859839276263,  lat: 43.5000304051637 },
            { lng: -94.4552382894281, lat: 43.4981020923778 },
            { lng: -94.2467873911458, lat: 43.4989484742926 },
            { lng: -93.9739498040804, lat: 43.5002988511065 },
            { lng: -93.653699466766,  lat: 43.5007626988541 },
            { lng: -93.5008302025135, lat: 43.5004884829356 },
            { lng: -93.0543803044398, lat: 43.5014574340012 },
            { lng: -93.0272108293768, lat: 43.5012788635835 },
            { lng: -92.5580084257835, lat: 43.5002595022348 },
            { lng: -92.4531691122113, lat: 43.4994619143947 },
            { lng: -92.0775325230263, lat: 43.499153513998  },
            { lng: -91.7303661652997, lat: 43.4995717605756 }
        ];

        var outlinePath = new google.maps.Polygon({
            paths: [everythingElse, outlineCoordinates],
            strokeColor: "#333333",
            strokeOpacity: 0.3,
            strokeWeight: 2,
            fillColor: '#333333',
            fillOpacity: 0.2
        });

        outlinePath.setMap(<?php echo esc_js($gmap_name) ?>);

        <?php
        }
        ?>

        //map style
        var styles = <?php echo $this->style() ?>;
        <?php echo esc_js($gmap_name) ?>.setOptions({styles: styles});

        // loop through necessary marker logos and generate them
        <?php
        foreach ($marker_logo_list as $id => $marker_logo) {
            $marker_logo->generate_script();
        }

        // generate option for the different infobox styles
        foreach ($infobox_style_list as $option_name => $infobox_style) {
            $infobox_style->generate_option_script();
        }

        // generate all markers and attached infoboxes
        foreach ($marker_list as $id => $marker) {
            if (get_post_status($marker->post_id()) == 'publish') {
                $marker->generate_script($this, $gmap_name, $infobox_style_list);
            }
        }

        //activate pin clustering if necessary
        if($this->pin_clustering()) { ?>
        var mc = new MarkerClusterer(<?php echo esc_js($gmap_name) ?>, clusterMarkers, mcOptions);
        <?php
        }

        //add additional marker if necessary
        if($this->additional_marker()) {
            $additional_marker->generate_script($this, $gmap_name, '');
        }
        ?>
    }
    //define prev infobox to close the infobox on new infobox click
    var prevInfobox = false;
    <?php
    if($this->load_scripts()) {
    ?>
    google.maps.event.addDomListener(window, 'load', initialize_<?php echo esc_js($gmap_name) ?>);
    <?php
    }
    ?>
</script>
