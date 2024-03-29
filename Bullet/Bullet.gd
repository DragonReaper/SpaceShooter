extends Area2D

var plBulletEffect := preload("res://Bullet/bulletEffect.tscn")

export var speed: float = 500;

func _physics_process(delta):
	position.y -= speed * delta;
	


func _on_VisibilityNotifier2D_screen_exited():
	queue_free()


func _on_Bullet_area_entered(area):
	if area.is_in_group("Damageable"):
		var bulletEffect := plBulletEffect.instance()
		bulletEffect.position = position
		get_parent().add_child(bulletEffect)
		
		area.damage(1) 
		queue_free()
