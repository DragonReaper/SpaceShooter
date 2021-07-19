extends Area2D

var plBullet := preload("res://Bullet/Bullet.tscn")
onready var sprite:= $Sprite
onready var firingPositions:=$FiringPositions
onready var fireDelayTimer:= $FireDelayTimer

export var speed: float=100
export var fireDelay: float= 0.1
var vel := Vector2(0,0)

func _process(delta):
	if vel.x<0:
		sprite.frame=0
	elif vel.x>0:
		sprite.frame=2
	else:
		sprite.frame=1
	
	if Input.is_action_pressed("shoot") and fireDelayTimer.is_stopped():
		fireDelayTimer.start(fireDelay)
		for child in firingPositions.get_children():
			var bullet := plBullet.instance()
			bullet.global_position = child.global_position
			get_tree().current_scene.add_child(bullet)

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
	
 
