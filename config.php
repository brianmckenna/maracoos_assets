<?php
  $assets = array(
    array(
       'name'        => 'NDBC'
      ,'displayName' => 'NDBC buoys'
      ,'bbox'        => '-78,35.5,-62,44'
      ,'minZoom'     => 6
    )
    ,array(
       'name'        => 'CO-OPS'
      ,'displayName' => 'CO-OPS stations'
      ,'bbox'        => '-78,35.5,-62,44'
      ,'minZoom'     => 7
    )
    ,array(
       'name'        => 'HRECOS'
      ,'displayName' => 'HRECOS stations'
      ,'bbox'        => '-75,40.5,-73,43'
      ,'minZoom'     => 0
    )
    ,array(
       'name'        => 'NERRS'
      ,'displayName' => 'NERRS stations'
      ,'bbox'        => '-78,35.5,-62,44'
      ,'minZoom'     => 5
    )
    ,array(
       'name'        => 'USGS'
      ,'displayName' => 'USGS stations'
      ,'bbox'        => '-78,35.5,-62,44'
      ,'minZoom'     => 10
    )
    ,array(
       'name'        => 'Gliders'
      ,'displayName' => 'Gliders'
      ,'bbox'        => '-78,35.5,-62,44'
      ,'minZoom'     => 0
    )
    ,array(
       'name'        => 'Drifters'
      ,'displayName' => 'Drifters'
      ,'bbox'        => '-78,35.5,-62,44'
      ,'minZoom'     => 0
    )
    ,array(
       'name'        => 'Ship'
      ,'displayName' => 'Ships & drifting buoys'
      ,'bbox'        => '-78,35.5,-62,44'
      ,'minZoom'     => 5
    )
    ,array(
       'name'        => 'Satellites'
      ,'displayName' => 'Satellite ground stations'
      ,'bbox'        => '-78,35.5,-62,44'
      ,'minZoom'     => 0
    )
    ,array(
       'name'        => 'HF Radar'
      ,'displayName' => 'HF radar ground stations'
      ,'bbox'        => '-78,35.5,-62,44'
      ,'minZoom'     => 0
    )
  );

  $models = array(
    array(
       'name'                 => 'ROMS'
      ,'displayName'          => 'Chesapeake currents'
      ,'settingsParam'        => 'baseStyle,colorMap,barbLabel,striding,tailMag,min,max'
      ,'defaultStyle'         => 'CURRENTS_RAMP-Jet-False-1-True-0-2'
      ,'settingsMinMaxBounds' => '0-6'
      ,'defaultImageType'     => 'png'
      ,'legend'               => true
      ,'bbox'                 => '-79,35.5,-74,40'
      ,'queryable'            => true
      ,'category'             => 'currentsVelocity'
      ,'timestamp'            => true
      ,'wms'                  => array(
         'url'    => 'http://services.asascience.com/ecop/wms.aspx?'
        ,'layers' => 'NOSCBOFSCUR_CURRENTS'
      )
    )
    ,array(
       'name'                 => 'STPS'
      ,'displayName'          => 'STPS currents'
      ,'settingsParam'        => 'baseStyle,colorMap,barbLabel,striding,tailMag,min,max'
      ,'defaultStyle'         => 'CURRENTS_RAMP-Jet-False-1-True-0-2'
      ,'settingsMinMaxBounds' => '0-6'
      ,'defaultImageType'     => 'png'
      ,'legend'               => true
      ,'bbox'                 => '-78,35.5,-62,44'
      ,'queryable'            => true
      ,'category'             => 'currentsVelocity'
      ,'timestamp'            => true
      ,'wms'                  => array(
         'url'    => 'http://services.asascience.com/ecop/wms.aspx?'
        ,'layers' => 'CODARSTPS_CURRENTS'
      )
    )
    ,array(
       'name'                 => 'Stevens NYHOPS'
      ,'displayName'          => 'Stevens NYHOPS currents'
      ,'settingsParam'        => 'baseStyle,colorMap,barbLabel,striding,tailMag,min,max'
      ,'defaultStyle'         => 'CURRENTS_RAMP-Jet-False-1-True-0-2'
      ,'settingsMinMaxBounds' => '0-6'
      ,'defaultImageType'     => 'png'
      ,'legend'               => true
      ,'bbox'                 => '-78,35.5,-62,44'
      ,'queryable'            => true
      ,'category'             => 'currentsVelocity'
      ,'timestamp'            => true
      ,'wms'                  => array(
         'url'    => 'http://services.asascience.com/ecop/wms.aspx?'
        ,'layers' => 'NYHOPSCUR_currents'
      )
    )
    ,array(
       'name'                 => 'ROMS ESPRESSO'
      ,'displayName'          => 'ROMS ESPRESSO currents'
      ,'settingsParam'        => 'baseStyle,colorMap,barbLabel,striding,tailMag,min,max'
      ,'defaultStyle'         => 'CURRENTS_RAMP-Jet-False-1-True-0-2'
      ,'settingsMinMaxBounds' => '0-6'
      ,'defaultImageType'     => 'png'
      ,'legend'               => true
      ,'bbox'                 => '-78,35.5,-62,44'
      ,'queryable'            => true
      ,'category'             => 'currentsVelocity'
      ,'timestamp'            => true
      ,'wms'                  => array(
         'url'    => 'http://services.asascience.com/ecop/wms.aspx?'
        ,'layers' => 'ESPRESSO_CURRENTS'
      )
    )
    ,array(
       'name'                 => 'HOPS'
      ,'displayName'          => 'MARACOOS HOPS currents'
      ,'settingsParam'        => 'baseStyle,colorMap,barbLabel,striding,tailMag,min,max'
      ,'defaultStyle'         => 'CURRENTS_RAMP-Jet-False-1-True-0-2'
      ,'settingsMinMaxBounds' => '0-6'
      ,'defaultImageType'     => 'png'
      ,'legend'               => true
      ,'bbox'                 => '-78,35.5,-62,44'
      ,'queryable'            => true
      ,'category'             => 'currentsVelocity'
      ,'timestamp'            => true
      ,'wms'                  => array(
         'url'    => 'http://services.asascience.com/ecop/wms.aspx?'
        ,'layers' => 'PESHELF_CURRENTS'
      )
    )
    ,array(
       'name'                 => 'NCOM currents'
      ,'displayName'          => 'NCOM currents'
      ,'settingsParam'        => 'baseStyle,colorMap,barbLabel,striding,tailMag,min,max'
      ,'defaultStyle'         => 'CURRENTS_RAMP-Jet-False-1-True-0-2'
      ,'settingsMinMaxBounds' => '0-6'
      ,'defaultImageType'     => 'png'
      ,'legend'               => true
      ,'bbox'                 => '-78,35.5,-62,44'
      ,'queryable'            => true
      ,'category'             => 'currentsVelocity'
      ,'timestamp'            => true
      ,'wms'                  => array(
         'url'    => 'http://services.asascience.com/ecop/wms.aspx?'
        ,'layers' => 'NCOM_CURRENTS'
      )
    )
    ,array(
       'name'                 => 'HYCOM currents'
      ,'displayName'          => 'HYCOM currents'
      ,'settingsParam'        => 'baseStyle,colorMap,barbLabel,striding,tailMag,min,max'
      ,'defaultStyle'         => 'CURRENTS_RAMP-Jet-False-1-True-0-2'
      ,'settingsMinMaxBounds' => '0-6'
      ,'defaultImageType'     => 'png'
      ,'legend'               => true
      ,'bbox'                 => '-78,35.5,-62,44'
      ,'queryable'            => true
      ,'category'             => 'currentsVelocity'
      ,'timestamp'            => true
      ,'wms'                  => array(
         'url'    => 'http://services.asascience.com/ecop/wms.aspx?'
        ,'layers' => 'HYCOM_CURRENTS'
      )
    )
    ,array(
       'name'                 => 'NAM winds'
      ,'displayName'          => 'NAM winds'
      ,'settingsParam'        => 'baseStyle,barbLabel,striding,min,max'
      ,'defaultStyle'         => 'WINDS_VERY_SPARSE_GRADIENT-False-1-0-45'
      ,'settingsMinMaxBounds' => '0-70'
      ,'defaultImageType'     => 'png'
      ,'legend'               => true
      ,'bbox'                 => '-78,35.5,-62,44'
      ,'queryable'            => true
      ,'category'             => 'windsVelocity'
      ,'timestamp'            => true
      ,'wms'                  => array(
         'url'    => 'http://services.asascience.com/ecop/wms.aspx?'
        ,'layers' => 'NAM_WINDS'
      )
    )
    ,array(
       'name'                 => 'WWIII waves'
      ,'displayName'          => 'WWIII waves'
      ,'settingsParam'        => ''
      ,'defaultStyle'         => ''
      ,'settingsMinMaxBounds' => ''
      ,'defaultImageType'     => 'png'
      ,'legend'               => true
      ,'bbox'                 => '-78,35.5,-62,44'
      ,'queryable'            => true
      ,'category'             => 'wavesElevation'
      ,'timestamp'            => true
      ,'wms'                  => array(
         'url'    => 'http://services.asascience.com/ecop/wms.aspx?'
        ,'layers' => 'WW3_WAVE_HEIGHT'
      )
    )
    ,array(
       'name'                 => 'NCOM SST'
      ,'displayName'          => 'NCOM water temperature'
      ,'settingsParam'        => ''
      ,'defaultStyle'         => ''
      ,'settingsMinMaxBounds' => ''
      ,'defaultImageType'     => 'png'
      ,'legend'               => true
      ,'bbox'                 => '-78,35.5,-62,44'
      ,'queryable'            => true
      ,'category'             => 'temperature'
      ,'timestamp'            => true
      ,'wms'                  => array(
         'url'    => 'http://services.asascience.com/ecop/wms.aspx?'
        ,'layers' => 'NCOM_SST'
      )
    )
  );

  $observations = array(
    array(
       'name'                 => 'HF radar currents'
      ,'displayName'          => 'HF radar currents'
      ,'settingsParam'        => 'baseStyle,colorMap,barbLabel,striding,tailMag,min,max'
      ,'defaultStyle'         => 'CURRENTS_RAMP-Jet-False-1-True-0-2'
      ,'settingsMinMaxBounds' => '0-6'
      ,'defaultImageType'     => 'png'
      ,'legend'               => true
      ,'bbox'                 => '-78,35.5,-62,44'
      ,'queryable'            => true
      ,'category'             => 'currentsVelocity'
      ,'timestamp'            => true
      ,'wms'                  => array(
         'url'    => 'http://services.asascience.com/ecop/wms.aspx?'
        ,'layers' => 'MARCOOSHFRADAR_CURRENTS'
      )
    )
    ,array(
       'name'                 => 'GOES visible imagery'
      ,'displayName'          => 'GOES visible imagery'
      ,'settingsParam'        => ''
      ,'defaultStyle'         => ''
      ,'settingsMinMaxBounds' => ''
      ,'defaultImageType'     => 'png'
      ,'legend'               => false
      ,'bbox'                 => '-78,35.5,-62,44'
      ,'queryable'            => false
      ,'category'             => ''
      ,'timestamp'            => false
      ,'wms'                  => array(
         'url'    => 'http://mesonet.agron.iastate.edu/cgi-bin/wms/goes/conus_vis.cgi?'
        ,'layers' => 'conus_vis_1km_900913'
      )
    )
    ,array(
       'name'                 => 'NHC storm tracks'
      ,'displayName'          => 'NHC storm tracks'
      ,'settingsParam'        => ''
      ,'defaultStyle'         => ''
      ,'settingsMinMaxBounds' => ''
      ,'defaultImageType'     => 'png'
      ,'legend'               => false
      ,'bbox'                 => '-78,35.5,-62,44'
      ,'queryable'            => false
      ,'category'             => ''
      ,'timestamp'            => false
      ,'wms'                  => array(
         'url'    => 'http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/wwa?BGCOLOR=0xCCCCFE&'
        ,'layers' => 'NHC_TRACK_POLY,NHC_TRACK_LIN,NHC_TRACK_PT,NHC_TRACK_PT_72DATE,NHC_TRACK_PT_120DATE,NHC_TRACK_PT_0NAMEDATE,NHC_TRACK_PT_MSLPLABELS,NHC_TRACK_PT_72WLBL,NHC_TRACK_PT_120WLBL,NHC_TRACK_PT_72CAT,NHC_TRACK_PT_120CAT'
      )
    )
  );

  function makeObsMinZoom($assets) {
    $a = array();
    for ($i = 0; $i < count($assets); $i++) {
      array_push($a,"'".$assets[$i]['name']."' : ".$assets[$i]['minZoom']);
    }
    return implode(',',$a);
  }

  function populateMainStoreAssets($assets) {
    $a = array();
    for ($i = 0; $i < count($assets); $i++) {
      array_push($a,'['.implode("\n,",array(
         "'asset'"                                                                                                   // type
        ,"'".$assets[$i]['name']."'"                                                                                 // name
        ,"'".$assets[$i]['displayName']."'"                                                                          // displayName
        ,"'off'"                                                                                                     // info
        ,"defaultLayers['".$assets[$i]['name']."'] ? 'on' : 'off'"                                                   // status
        ,"''"                                                                                                        // settings
        ,"'".str_replace("'","\\'",str_replace("\n",' ',file_get_contents('info/'.$assets[$i]['name'].'.html')))."'" // infoBlurb
        ,"''"                                                                                                        // settingsParam
        ,"''"                                                                                                        // settingsOpacity
        ,"''"                                                                                                        // settingsImageType
        ,"''"                                                                                                        // settingsPalette
        ,"''"                                                                                                        // settingsBaseStyle
        ,"''"                                                                                                        // settingsColorMap
        ,"''"                                                                                                        // settingsStriding
        ,"''"                                                                                                        // settingsBarbLabel
        ,"''"                                                                                                        // settingsTailMag
        ,"''"                                                                                                        // settingsMin
        ,"''"                                                                                                        // settingsMax
        ,"''"                                                                                                        // settingsMinMaxBounds
        ,"''"                                                                                                        // rank
        ,"''"                                                                                                        // legend
        ,"''"                                                                                                        // timestamp
        ,"'".$assets[$i]['bbox']."'"                                                                                 // bbox
        ,"''"                                                                                                        // queryable
        ,"''"                                                                                                        // settingsLayers
        ,"''"                                                                                                        // category
      )).']');
    }
    return implode(',',$a);
  }

  function populateMainStoreOverlays($type,$overlays) {
    $a = array();
    for ($i = 0; $i < count($overlays); $i++) {
      $sp = explode(',',$overlays[$i]['settingsParam']);
      $spcol2idx = array();
      for ($j = 0; $j < count($sp); $j++) {
        $spcol2idx[$sp[$j]] = $j;
      }
      array_push($a,'['.implode("\n,",array(
         "'$type'"                                                                                                     // type
        ,"'".$overlays[$i]['name']."'"                                                                                 // name
        ,"'".$overlays[$i]['displayName']."'"                                                                          // displayName
        ,"'off'"                                                                                                       // info
        ,"defaultLayers['".$overlays[$i]['name']."'] ? 'on' : 'off'"                                                   // status
        ,"'off'"                                                                                                       // settings
        ,"'".str_replace("'","\\'",str_replace("\n",' ',file_get_contents('info/'.$overlays[$i]['name'].'.html')))."'" // infoBlurb
        ,"'".$overlays[$i]['settingsParam']."'"                                                                        // settingsParam
        ,"typeof defaultOpacities['".$overlays[$i]['name']."'] != 'undefined'"
          ." && defaultOpacities['".$overlays[$i]['name']."'] != ''"
          ." ? defaultOpacities['".$overlays[$i]['name']."'] : 100"                                                    // settingsOpacity
        ,"defaultImageTypes['".$overlays[$i]['name']."']"                                                              // settingsImageType
        ,"''"                                                                                                          // settingsPalette
        ,array_key_exists('baseStyle',$spcol2idx)
          ? "defaultStyles['".$overlays[$i]['name']."'].split('-')[".$spcol2idx['baseStyle']."]" : "''"                // settingsBaseStyle
        ,array_key_exists('colorMap',$spcol2idx)
          ? "defaultStyles['".$overlays[$i]['name']."'].split('-')[".$spcol2idx['colorMap']."]" : "''"                 // settingsColorMap
        ,array_key_exists('striding',$spcol2idx)
          ? "defaultStyles['".$overlays[$i]['name']."'].split('-')[".$spcol2idx['striding']."]" : "''"                 // settingsStriding
        ,array_key_exists('barbLabel',$spcol2idx)
          ? "defaultStyles['".$overlays[$i]['name']."'].split('-')[".$spcol2idx['barbLabel']."]" : "''"                // settingsBarbLabel
        ,array_key_exists('tailMag',$spcol2idx)
          ? "defaultStyles['".$overlays[$i]['name']."'].split('-')[".$spcol2idx['tailMag']."]" : "''"                  // settingsTailMag
        ,array_key_exists('min',$spcol2idx)
          ? "defaultStyles['".$overlays[$i]['name']."'].split('-')[".$spcol2idx['min']."]" : "''"                      // settingsMin
        ,array_key_exists('max',$spcol2idx)
          ? "defaultStyles['".$overlays[$i]['name']."'].split('-')[".$spcol2idx['max']."]" : "''"                      // settingsMax
        ,"'".$overlays[$i]['settingsMinMaxBounds']."'"                                                                 // settingsMinMaxBounds
        ,"''"                                                                                                          // rank
        ,$overlays[$i]['legend'] ?
          sprintf("'%sLAYERS=%s&LAYER=%s&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=%s&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetLegendGraphic&TIME=&SRS=EPSG:3857'"
            ,$overlays[$i]['wms']['url']
            ,$overlays[$i]['wms']['layers']
            ,$overlays[$i]['wms']['layers']
            ,"' + defaultStyles['".$overlays[$i]['name']."'] + '"
          ) : "''"                                                                                                     // legend
        ,!$overlays[$i]['timestamp'] ? "'false'" : "''"                                                                // timestamp
        ,"'".$overlays[$i]['bbox']."'"                                                                                 // bbox
        ,"'".($overlays[$i]['queryable'] ? 'true' : 'false')."'"                                                       // queryable
        ,"''"                                                                                                          // settingsLayers
        ,"'".$overlays[$i]['category']."'"                                                                             // category
      )).']');
    }
    return implode(',',$a);
  }
?>