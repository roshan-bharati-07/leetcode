        var maxArea = function(height){
            let l = 0 
            let r = height.length - 1 

            let max_area = 0 

        while(l < r) {
            w = r - l
        
            let min_height = Math.min(height[l], height[r])
            let area = w * min_height 
            max_area = Math.max(area, max_area)

            if(height[l] < height[r]) {
                l += 1 
            }
            else {
                r -= 1 
            }
        }

        return max_area 
        }

        console.log(maxArea([1,1]))


