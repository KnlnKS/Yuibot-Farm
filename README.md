 <a href="https://deno.land/">
		<img src="https://img.shields.io/badge/deno-^1.8.0-lightgrey?logo=deno"
			 alt="Deno">
	</a>
 <a href="https://gitmoji.dev">
		<img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
			 alt="Gitmoji">
	</a>


 
# 🚜🌸 Yuibot Farm 🌸🚜

## 📚 About
Simple Deno application that will farm for resources from the Yuibot economy.
See here for more details on [Yuibot](https://discordyui.net/). 
To run simply provide url of discord channel to farm in and account's authorization token.
Project can be run with Deno or with Docker.

## 🦕 Running with Deno 
Have Deno installed and run the following, replacing the variables:
`deno run --allow-net index.ts --url=$URL --auth=$AUTH`

## 🐳 Running with Docker
Have Deno installed and run the following, replacing the variables:
`./docker-build.sh --url="$URL" --auth="$AUTH"`
