(function gamecore(){
	
	var canvas = document.getElementById('game_canvas')
	var ctx = canvas.getContext('2d')

	var fps = 60
	var interval = 1000 / fps
	var running = true
	var pause = false

	canvas.width = 400
	canvas.height = 400

	addEventListener("keydown", function(e){

	})
	addEventListener("keyup", function(e){
		
	})

	function gameloop(time){
		var start = Date.now()

		update_logic(time)
		update_screen(ctx)

		time = Date.now() - start
		if(running){
			var time_spent = time > interval ? time : interval
			setTimeout(function(){gameloop(time_spent)}, interval - time)
		}
		else
			return
	}

	var state = {
		grid: []
	}

	var constants = {
		game_area_width: canvas.width - 200,
		cells_across : 10,
		cells_vertically: 20
	}

	function init(){
		for(var x = 0; x < constants.cells_across; x++){
			state.grid[x] = []
			for(var y = 0; y < constants.cells_vertically; y++){
				state.grid[x][y] = "000"
			}
		}
		constants.cell_dim = constants.game_area_width / constants.cells_across
	}

	function update_logic(time){
		
	}

	function update_screen(ctx){
		
		for(var x = 0; x < state.grid.length; x++){
			for(var y = 0; y < state.grid[x].length; y++){
				ctx.fillStyle = state.grid[x][y]
				ctx.fillRect(x * constants.cell_dim, y * constants.cell_dim, constants.cell_dim - 1, constants.cell_dim - 1)
			}
		}
	}

	init()
	gameloop(0)	

})()

