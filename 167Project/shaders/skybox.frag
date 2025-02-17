
#version 330 core
// This is a sample fragment shader.
// Inputs to the fragment shader are the outputs of the same name from the vertex shader.
// Note that you do not have access to the vertex shader's default output, gl_Position.
out vec4 fragColor;


in vec3 TexCoords;
in vec3 normal;
uniform vec3 color;
uniform samplerCube skybox;

// You can output many things. The first vec4 type output determines the color of the fragment

void main()
{
    
    // Use the color passed in. An alpha of 1.0f means it is not transparent.
    fragColor = vec4(color,1.0f);
    fragColor = texture(skybox,TexCoords);
    
}
