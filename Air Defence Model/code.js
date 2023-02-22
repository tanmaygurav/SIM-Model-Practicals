// fror all bomber in the air
for (Bomber b : main.bombers) {
    // if cont have more engagements, do nothing
    if (guidedmissiles.size() >= 2)
        break;
    // if within engagement range
        // already engage by another missile?
    if (distanceTo(b)<range) {
        boolean engaged = false;
        for(Missile m : main.missles){
            if(m.target == b){
                engaged=true;
                break;
            }
        }
        if(engaged)
        continue; //proceed to the next bomber
        // engage (create a new missile)
        Missile m :main.add_missile(this,b);
        guidedmissiles.add(m); // register guided missile
    }
}