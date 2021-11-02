extends Area2D
class_name Enemy

export var verticalSpeed := 10.0
export var health : int = 5
var playerInArea: Player= null

func _physics_process(delta):
	position.y += verticalSpeed * delta
	
func _process(delta):
	if playerInArea != null:
		playerInArea.damage(1)
		
func damage(amount : int):
	health -= amount
	if health<= 0:
		queue_free()


func _on_VisibilityNotifier2D_screen_exited():
	queue_free()


func _on_Enemy_area_entered(area):
	if area is Player:
		playerInArea = area 

func _on_Enemy_area_exited(area):
	if area is Player:
		playerInArea = null
