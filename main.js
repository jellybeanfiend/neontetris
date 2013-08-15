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

	var constants = {
		game_area_width: canvas.width - 200,
		cells_across : 10,
		cells_vertically: 20
	}

	var state = {
		grid: [],
		current_shape: {},
		currentx: (constants.game_area_width / 2) - (constants.game_area_width / constants.cells_across),
		currenty: 0
	}

	var shapes = {
		square : {
			shape : [['yellow', 'yellow'],['yellow', 'yellow']],
			color : 'yellow'
		},
		lowercasel : {
			shape : [['aqua'],['aqua'],['aqua'],['aqua']],
			color: 'aqua'
		},
		z : {
			shape : [['transparent','green','green'],['green', 'green','transparent']],
			color: 'green'
		},
		backwardsz : {
			shape : [['red','red','transparent'],['transparent','red','red']],
			color : 'red'
		},
		upperl : {
			shape : [['orange','transparent'],['orange','transparent'],['orange','orange']],
			color : 'orange'
		},
		backwardsupperl : {
			shape : [['transparent','blue'], ['transparent','blue'],['blue','blue']],
			color: 'blue'
		},
		prong : {
			shape: [['transparent','purple','transparent'],['purple','purple','purple']],
			color: 'purple'
		}
	}

	function init(){
		for(var x = 0; x < constants.cells_across; x++){
			state.grid[x] = []
			for(var y = 0; y < constants.cells_vertically; y++){
				state.grid[x][y] = "000"
			}
		}
		constants.cell_dim = constants.game_area_width / constants.cells_across
		state.current_shape = shapes.lowercasel
	}

	function update_logic(time){
		
		if(state.currenty + (constants.cell_dim * 2) > canvas.height)
			return
		state.currenty += 1
			
	}

	function update_screen(ctx){

		ctx.fillStyle = "#444"
		ctx.fillRect(0,0,constants.game_area_width,canvas.height)
		
		for(var x = 0; x < state.grid.length; x++){
			for(var y = 0; y < state.grid[x].length; y++){
				ctx.fillStyle = state.grid[x][y]
				ctx.fillRect(x * constants.cell_dim, y * constants.cell_dim, constants.cell_dim - 1, constants.cell_dim - 1)
			}
		}
		for(var x = 0; x < state.current_shape.shape.length; x++){
			for(var y = 0; y < state.current_shape.shape[x].length; y++){
				ctx.fillStyle = state.current_shape.shape[x][y]
				ctx.fillRect((x * constants.cell_dim) + state.currentx, (y * constants.cell_dim) + state.currenty, constants.cell_dim - 1, constants.cell_dim - 1)
			}
		}
	}

	init()
	gameloop(0)	

})()

