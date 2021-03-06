extends Area2D


onready var sprite:= $Sprite

var speed: float=100
var vel := Vector2(0,0)

func _process(delta):
	if vel.x<0:
		sprite.frame=0
	elif vel.x>0:
		sprite.frame=2
	else:
		sprite.frame=1
	

	
func _physics_process(delta):
	var dirVec := Vector2(0,0)
	
	if Input.is_action_pressed("move_left"):
		dirVec.x=-1
	elif Input.is_action_pressed("move_right"):
		dirVec.x=1
	elif Input.is_action_pressed("move_down"):
		dirVec.y=1
	elif Input.is_action_pressed("move_up"):
		dirVec.y=-1

	vel= dirVec.normalized()*speed
	position+= vel*delta
	
	var viewRect := get_viewport_rect()
	position.x=clamp(position.x, 0, viewRect.size.x)
	position.y= clamp(position.y, 0, viewRect.size.y)
	
 
