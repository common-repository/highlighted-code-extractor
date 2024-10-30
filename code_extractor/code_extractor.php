<?php
/**
 * @package Code_Extractor
 * @version 0.1.1
 */
/*
Plugin Name: Code Extractor
Plugin URI: http://wordpress.org/extend/plugins/highlighted-code-extractor
Description: This plugin extract expected code to new windows. specially, can run html code to see effict immediately.
Author: Wei Chen
Version: 0.1.1
Author URI: http://chen-w.com/
License: GPL2
*/

//Global variables
$code_extractor_output_flag = false;
$code_extractor_id_sequence = 0;

//I18N
load_plugin_textdomain('highlightedcodeextractor', false, basename(dirname(__FILE__)) . '/locales' );

// This just echoes the chosen line, we'll position it later
function code_extractor_do_extract($atts, $content=null, $code="") {
	// $atts    ::= array of attributes
	// $content ::= text within enclosing form of shortcode element
	// $code    ::= the shortcode found, when == callback name
	global $code_extractor_output_flag;
	$code_extractor_output_flag = true;
	global $code_extractor_id_sequence;
	$code_extractor_id_sequence += 1;
	extract( shortcode_atts( array('id' => 'seq'. strval($code_extractor_id_sequence)), $atts ) );
	return '<div class="extract">' . $content . '<textarea id="' . $id . '" style="display:none;">' . $clean_content . '</textarea><input type="button" onclick="runTextareaCode(document.getElementById(\'' . $id . '\'))" value="' . __("preview in new window/tab", 'highlightedcodeextractor') . '" />
<input type="button" onclick="saveTextareaCode(document.getElementById(\'' . $id . '\'))" value="' . __("copy code", 'highlightedcodeextractor') . '" /></div>';
}

// Now we set that function up to execute when the admin_footer action is called
add_shortcode('extract', 'code_extractor_do_extract');

//
function code_extractor_output_scripts()
{
	global $code_extractor_output_flag;
	if (!$code_extractor_output_flag)
		return;
	echo "<script type='text/javascript' src='" . plugins_url('code_extractor/code_extractor.js') . "'></script><script type='text/javascript'>saveSourceFromDiv('extract');</script>\n";
	$code_extractor_output_flag = false;
}

//
add_action('wp_footer', 'code_extractor_output_scripts', 15);
?>
