def complex_function(x, y, z):
    if x > 10:
        if y > 20:
            if z > 30:
                return x + y + z
            else:
                return x - z
        else:
            return y - x
    else:
        return z

print(complex_function(5, 25, 35))
